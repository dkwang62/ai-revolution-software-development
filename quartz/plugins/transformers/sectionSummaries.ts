import { Root as HTMLRoot, Element, Text } from "hast"
import { toText } from "hast-util-to-text"
import { QuartzTransformerPlugin } from "../types"

const excludedFiles = new Set(["98-glossary.md", "99-bibliography-and-evidence-notes.md"])

function firstSentence(text: string): string | undefined {
  const match = text.trim().match(/^(.+?[.!?])(?:\s|$)/s)
  const sentence = match?.[1]?.trim()
  return sentence && sentence.length <= 360 ? sentence : undefined
}

/**
 * Makes the opening sentence below each substantial heading easy to scan.
 * The author has already written these as the section's promise; presenting
 * them consistently avoids adding a second, repetitive layer of prose.
 */
export const SectionSummaries: QuartzTransformerPlugin = () => ({
  name: "SectionSummaries",
  htmlPlugins() {
    return [
      () => (tree: HTMLRoot, file) => {
        if (excludedFiles.has(file.basename ?? "")) return

        const children = tree.children
        for (let index = 0; index < children.length - 1; index++) {
          const heading = children[index]
          const paragraphIndex = children.findIndex(
            (node, candidateIndex) =>
              candidateIndex > index && node.type === "element",
          )
          const paragraph = paragraphIndex === -1 ? undefined : children[paragraphIndex]
          if (
            heading.type !== "element" ||
            heading.tagName !== "h2" ||
            paragraph.type !== "element" ||
            paragraph.tagName !== "p" ||
            paragraph.properties?.className?.includes("section-summary")
          ) {
            continue
          }

          const sentence = firstSentence(toText(paragraph))
          if (!sentence) continue

          // Most opening paragraphs are plain prose. Split those cleanly so a
          // reader sees the promise once, then the supporting explanation.
          // Leave richer paragraphs (links, citations, emphasis) untouched:
          // preserving their meaning matters more than forcing this treatment.
          const plainParagraph = paragraph.children.every((node) => node.type === "text")
          if (!plainParagraph) continue
          const fullText = toText(paragraph).trim()
          const remainder = fullText.slice(sentence.length).trim()

          const summary: Element = {
            type: "element",
            tagName: "p",
            properties: { className: ["section-summary"] },
            children: [
              { type: "element", tagName: "span", properties: { className: ["section-summary-label"] }, children: [{ type: "text", value: "In brief" } as Text] },
              { type: "text", value: `: ${sentence}` } as Text,
            ],
          }
          children.splice(paragraphIndex, 0, summary)
          if (remainder) {
            paragraph.children = [{ type: "text", value: remainder } as Text]
          } else {
            children.splice(paragraphIndex + 1, 1)
          }
          index = paragraphIndex
        }
      },
    ]
  },
})

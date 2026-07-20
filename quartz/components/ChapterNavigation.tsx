import { resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { bookEntries } from "./bookStructure"
import style from "./styles/chapterNavigation.scss"

const ChapterNavigation: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const currentSlug = fileData.slug!
  const currentIndex = bookEntries.findIndex((entry) => entry.slug === currentSlug)

  if (currentIndex < 0) {
    return null
  }

  const previous = currentIndex > 0 ? bookEntries[currentIndex - 1] : undefined
  const next = currentIndex < bookEntries.length - 1 ? bookEntries[currentIndex + 1] : undefined

  return (
    <nav class="chapter-navigation" aria-label="Chapter navigation">
      {previous ? (
        <a
          class="chapter-navigation-link previous"
          href={resolveRelative(currentSlug, previous.slug)}
        >
          <span class="chapter-navigation-direction">← Previous</span>
          <span class="chapter-navigation-title">{previous.title}</span>
        </a>
      ) : (
        <span class="chapter-navigation-spacer" />
      )}
      {next ? (
        <a class="chapter-navigation-link next" href={resolveRelative(currentSlug, next.slug)}>
          <span class="chapter-navigation-direction">Next →</span>
          <span class="chapter-navigation-title">{next.title}</span>
        </a>
      ) : (
        <span class="chapter-navigation-spacer" />
      )}
    </nav>
  )
}

ChapterNavigation.css = style

export default (() => ChapterNavigation) satisfies QuartzComponentConstructor

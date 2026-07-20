import { resolveRelative } from "../util/path"
import { classNames } from "../util/lang"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { bookSections } from "./bookStructure"
import style from "./styles/bookContents.scss"
// @ts-ignore
import script from "./scripts/bookContents.inline"

const BookContents: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const currentSlug = fileData.slug!

  return (
    <details class={classNames(displayClass, "book-contents")}>
      <summary>
        <span>Table of contents</span>
        <span class="book-contents-hint">Menu</span>
      </summary>
      <nav class="book-contents-panel" aria-label="Book table of contents">
        {bookSections.map((section) => (
          <section class="book-contents-section">
            <h3>{section.title}</h3>
            <ol>
              {section.entries.map((entry) => {
                const active = currentSlug === entry.slug
                return (
                  <li>
                    <a
                      href={resolveRelative(currentSlug, entry.slug)}
                      class={active ? "active" : undefined}
                      aria-current={active ? "page" : undefined}
                    >
                      {entry.shortTitle}
                    </a>
                  </li>
                )
              })}
            </ol>
          </section>
        ))}
      </nav>
    </details>
  )
}

BookContents.css = style
BookContents.afterDOMLoaded = script

export default (() => BookContents) satisfies QuartzComponentConstructor

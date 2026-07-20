import { resolveRelative } from "../util/path"
import { classNames } from "../util/lang"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { bookSections } from "./bookStructure"
import style from "./styles/bookContents.scss"
// @ts-ignore
import script from "./scripts/bookContents.inline"

const BookContents: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const currentSlug = fileData.slug!

  const contents = () =>
    bookSections.map((section) => (
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
    ))

  return (
    <div class={classNames(displayClass, "book-contents")}>
      <nav class="book-contents-panel book-contents-desktop" aria-label="Book table of contents">
        {contents()}
      </nav>
      <details class="book-contents-mobile">
        <summary aria-label="Open table of contents">
          <span class="book-contents-menu-icon" aria-hidden="true">
            ☰
          </span>
        </summary>
        <nav class="book-contents-panel" aria-label="Book table of contents">
          {contents()}
        </nav>
      </details>
    </div>
  )
}

BookContents.css = style
BookContents.afterDOMLoaded = script

export default (() => BookContents) satisfies QuartzComponentConstructor

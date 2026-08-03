// @ts-ignore
import readAloudScript from "./scripts/readaloud.inline"
import styles from "./styles/readaloud.scss"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const ReadAloud: QuartzComponent = () => {
  return (
    <div class="read-aloud-controls" role="group" aria-label="Read this chapter aloud">
      <button class="read-aloud-toggle" type="button">
        Read aloud
      </button>
      <button class="read-aloud-stop" type="button" disabled>
        Stop
      </button>
      <span class="read-aloud-status" aria-live="polite" />
    </div>
  )
}

ReadAloud.beforeDOMLoaded = readAloudScript
ReadAloud.css = styles

export default (() => ReadAloud) satisfies QuartzComponentConstructor

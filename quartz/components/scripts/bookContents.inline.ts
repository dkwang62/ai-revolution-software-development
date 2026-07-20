function focusCurrentChapter() {
  const contents = document.querySelectorAll(".book-contents")

  for (const content of contents) {
    const panel = content.querySelector<HTMLElement>(".book-contents-panel")
    const active = content.querySelector<HTMLElement>('a[aria-current="page"]')

    if (!panel || !active || panel.clientHeight === 0) continue

    const target = active.offsetTop - panel.clientHeight / 2 + active.clientHeight / 2
    panel.scrollTop = Math.max(0, target)
  }
}

document.addEventListener("nav", focusCurrentChapter)

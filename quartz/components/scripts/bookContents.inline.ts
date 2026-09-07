function focusCurrentChapter() {
  const contents = document.querySelectorAll(".book-contents")

  for (const content of contents) {
    const panels = content.querySelectorAll<HTMLElement>(".book-contents-panel")

    for (const panel of panels) {
      const active = panel.querySelector<HTMLElement>('a[aria-current="page"]')

      if (!active || panel.clientHeight === 0) continue

      const target = active.offsetTop - panel.clientHeight / 2 + active.clientHeight / 2
      panel.scrollTop = Math.max(0, target)
    }
  }
}

function closeTabletSidebar() {
  const toggle = document.querySelector<HTMLInputElement>("#tablet-sidebar-toggle")

  if (toggle) {
    toggle.checked = false
  }
}

function setupTabletSidebarDismiss() {
  const contents = document.querySelectorAll(".book-contents")

  for (const content of contents) {
    const links = content.querySelectorAll("a")

    for (const link of links) {
      link.addEventListener("click", closeTabletSidebar)
    }
  }
}

document.addEventListener("nav", focusCurrentChapter)
document.addEventListener("nav", setupTabletSidebarDismiss)

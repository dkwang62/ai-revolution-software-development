let readAloudSession = 0

const sentenceChunks = (text: string, maximumLength = 2400) => {
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [text]
  const chunks: string[] = []
  let current = ""

  for (const sentence of sentences) {
    if (current.length + sentence.length > maximumLength && current) {
      chunks.push(current.trim())
      current = sentence
    } else {
      current += sentence
    }
  }

  if (current.trim()) chunks.push(current.trim())
  return chunks
}

document.addEventListener("nav", () => {
  readAloudSession += 1
  window.speechSynthesis?.cancel()

  const controls = document.querySelector<HTMLElement>(".read-aloud-controls")
  const toggle = controls?.querySelector<HTMLButtonElement>(".read-aloud-toggle")
  const stop = controls?.querySelector<HTMLButtonElement>(".read-aloud-stop")
  const status = controls?.querySelector<HTMLElement>(".read-aloud-status")
  if (!controls || !toggle || !stop || !status) return

  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    toggle.disabled = true
    status.textContent = "Read aloud is unavailable in this browser."
    return
  }

  let state: "ready" | "reading" | "paused" = "ready"
  const setState = (next: typeof state) => {
    state = next
    toggle.textContent = next === "paused" ? "Resume" : next === "reading" ? "Pause" : "Read aloud"
    stop.disabled = next === "ready"
    status.textContent = next === "paused" ? "Paused" : next === "reading" ? "Reading" : ""
  }

  const stopReading = () => {
    readAloudSession += 1
    window.speechSynthesis.cancel()
    setState("ready")
  }

  const startReading = () => {
    const article = document.querySelector<HTMLElement>("article.popover-hint")
    if (!article) return

    const copy = article.cloneNode(true) as HTMLElement
    copy.querySelectorAll("pre, figure, script, style").forEach((element) => element.remove())
    const text = (copy.innerText || copy.textContent || "").replace(/\s+/g, " ").trim()
    if (!text) return

    readAloudSession += 1
    const session = readAloudSession
    const chunks = sentenceChunks(text)
    let chunkIndex = 0
    setState("reading")

    const speakNext = () => {
      if (session !== readAloudSession) return
      const chunk = chunks[chunkIndex]
      if (!chunk) {
        setState("ready")
        return
      }

      const utterance = new SpeechSynthesisUtterance(chunk)
      utterance.lang = document.documentElement.lang || "en-US"
      utterance.onend = () => {
        if (session !== readAloudSession) return
        chunkIndex += 1
        speakNext()
      }
      utterance.onerror = () => {
        if (session === readAloudSession) setState("ready")
      }
      window.speechSynthesis.speak(utterance)
    }

    speakNext()
  }

  const onToggle = () => {
    if (state === "reading") {
      window.speechSynthesis.pause()
      setState("paused")
    } else if (state === "paused") {
      window.speechSynthesis.resume()
      setState("reading")
    } else {
      startReading()
    }
  }

  toggle.addEventListener("click", onToggle)
  stop.addEventListener("click", stopReading)
  window.addCleanup(() => {
    toggle.removeEventListener("click", onToggle)
    stop.removeEventListener("click", stopReading)
    stopReading()
  })
})

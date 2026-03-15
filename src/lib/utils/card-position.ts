// card-position.ts
export function registerCard(el: HTMLElement) {
  const update = () => {
    const rect = el.getBoundingClientRect()

    el.style.setProperty("--card-left", `${rect.left}px`)
    el.style.setProperty("--card-top", `${rect.top}px`)
  }

  update()

  const resize = new ResizeObserver(update)
  resize.observe(el)

  window.addEventListener("scroll", update, { passive: true })
}
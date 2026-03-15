import { useEffect } from "react"

export function useGlobalMouseLight() {
  useEffect(() => {
    let frame: number | null = null

    const handler = (e: PointerEvent) => {
      if (frame) cancelAnimationFrame(frame)

      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`)
        document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`)
      })
    }

    window.addEventListener("pointermove", handler)

    return () => window.removeEventListener("pointermove", handler)
  }, [])
}
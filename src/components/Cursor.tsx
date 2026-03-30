import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current!
    const ring = ringRef.current!

    let mx = -100, my = -100
    let rx = -100, ry = -100
    let raf: number
    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    const onEnter = () => {
      ring.classList.add('expanded')
      dot.style.transform = 'translate(-50%, -50%) scale(0.4)'
      dot.style.opacity = '0.5'
    }

    const onLeave = () => {
      ring.classList.remove('expanded')
      dot.style.transform = 'translate(-50%, -50%) scale(1)'
      dot.style.opacity = '1'
    }

    const tick = () => {
      // Dot snaps instantly
      dot.style.left = `${mx}px`
      dot.style.top  = `${my}px`

      // Ring lerps smoothly behind
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ring.style.left = `${rx}px`
      ring.style.top  = `${ry}px`

      raf = requestAnimationFrame(tick)
    }

    const bindHoverables = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    const observer = new MutationObserver(bindHoverables)
    observer.observe(document.body, { childList: true, subtree: true })
    bindHoverables()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}

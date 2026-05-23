import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Cursor() {

  const cursorRef = useRef(null)

  useEffect(() => {

    const cursor = cursorRef.current

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    let currentX = mouseX
    let currentY = mouseY

    window.addEventListener("mousemove", (e) => {

      mouseX = e.clientX
      mouseY = e.clientY

    })

    gsap.ticker.add(() => {

      currentX += (mouseX - currentX) * 0.15
      currentY += (mouseY - currentY) * 0.15

      gsap.set(cursor, {
        x: currentX,
        y: currentY,
      })

    })

    // MAGNETIC BUTTONS

    const magneticItems =
      document.querySelectorAll(".magnetic")

    magneticItems.forEach((item) => {

      item.addEventListener("mousemove", (e) => {

        const rect = item.getBoundingClientRect()

        const x =
          e.clientX - rect.left - rect.width / 2

        const y =
          e.clientY - rect.top - rect.height / 2

        gsap.to(item, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.4,
        })

      })

      item.addEventListener("mouseleave", () => {

        gsap.to(item, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1,0.3)"
        })

      })

    })

  }, [])

  return (

    <div
      ref={cursorRef}
      className="
      fixed
      top-0
      left-0
      w-8
      h-8
      rounded-full
      pointer-events-none
      z-[9999]
      mix-blend-difference
      bg-white
      -translate-x-1/2
      -translate-y-1/2
      hidden md:block
      "
    />

  )
}
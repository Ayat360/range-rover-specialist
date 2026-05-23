import { useEffect, useState } from "react"
import gsap from "gsap"

export default function Loader() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const tl = gsap.timeline()

    tl.to(".loader-text", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })

    tl.to(".loader-bar", {
      width: "100%",
      duration: 1.5,
      ease: "power3.inOut"
    })

    tl.to(".loader", {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut",
      delay: 0.5,
      onComplete: () => setLoading(false)
    })

  }, [])

  if (!loading) return null

  return (
    <div className="loader fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center">

      <h1 className="loader-text opacity-0 translate-y-10 text-white tracking-[0.3em] text-sm md:text-lg uppercase">
        Range Rover Specialist Lab
      </h1>

      <div className="w-[200px] h-[1px] bg-white/10 mt-6 overflow-hidden">
        <div className="loader-bar w-0 h-full bg-white"></div>
      </div>

    </div>
  )
}
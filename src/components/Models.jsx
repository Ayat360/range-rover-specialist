import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const models = [
  {
    name: "RANGE ROVER SPORT",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop",
    desc: "Dynamic luxury engineered for power and precision."
  },
  {
    name: "RANGE ROVER VELAR",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    desc: "Minimalist sophistication with futuristic performance."
  },
  {
    name: "RANGE ROVER DEFENDER",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop",
    desc: "Bold capability designed for modern adventure."
  }
]

export default function Models() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current

    const totalScroll = track.scrollWidth - window.innerWidth

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1,

          pin: true,
          pinSpacing: true,
          anticipatePin: 1,

          invalidateOnRefresh: true,
          fastScrollEnd: true,
        }
      })
    }, sectionRef)

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-black overflow-hidden min-h-screen"
    >
      <div
        ref={trackRef}
        className="flex h-screen"
      >
        {models.map((model, i) => (
          <div
            key={i}
            className="panel w-screen h-screen flex items-center relative flex-shrink-0"
          >
            <img
              src={model.image}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 px-10 md:px-20 max-w-3xl">
              <h2 className="text-5xl md:text-8xl font-semibold">
                {model.name}
              </h2>

              <p className="mt-6 text-gray-300">
                {model.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
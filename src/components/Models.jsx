import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const models = [
  {
    name: "RANGE ROVER SPORT",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop",
    desc: "Dynamic luxury engineered for power and precision.",
  },

  {
    name: "RANGE ROVER VELAR",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    desc: "Minimalist sophistication with futuristic performance.",
  },

  {
    name: "RANGE ROVER DEFENDER",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop",
    desc: "Bold capability designed for modern adventure.",
  },
]

export default function Models() {

  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {

    const track = trackRef.current

    const totalScroll =
      track.scrollWidth - window.innerWidth

    const ctx = gsap.context(() => {

      // MAIN HORIZONTAL SCROLL

      const scrollTween = gsap.to(track, {

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

      // PANEL ANIMATIONS

      gsap.utils.toArray(".panel").forEach((panel) => {

        const image =
          panel.querySelector(".model-image")

        const content =
          panel.querySelector(".model-content")

        // IMAGE PARALLAX / ZOOM

        gsap.fromTo(
          image,
          {
            scale: 1.2,
          },
          {
            scale: 1,
            ease: "none",

            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: "left center",
              end: "right center",
              scrub: true,
            }
          }
        )

        // TEXT REVEAL

        gsap.fromTo(
          content,
          {
            y: 120,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",

            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: "left center",
            }
          }
        )

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
            className="panel w-screen h-screen flex items-center relative flex-shrink-0 overflow-hidden"
          >

            {/* IMAGE */}

            <img
              src={model.image}
              alt=""
              className="model-image absolute inset-0 w-full h-full object-cover scale-110"
            />

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-black/70" />

            {/* GRID */}

            <div className="absolute inset-0 opacity-[0.07]">

              <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

            </div>

            {/* CONTENT */}

            <div className="model-content relative z-10 px-10 md:px-20 max-w-3xl">

              <p className="uppercase tracking-[0.4em] text-gray-400 text-xs md:text-sm mb-6">
                Premium Engineering
              </p>

              <h2 className="text-5xl md:text-8xl font-semibold leading-none">
                {model.name}
              </h2>

              <p className="mt-8 text-gray-300 text-sm md:text-lg leading-relaxed max-w-xl">
                {model.desc}
              </p>

              <div className="mt-10 flex gap-4 flex-wrap">

                <button className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-300 transition-all duration-300">
                  Explore Model
                </button>

                <button className="px-8 py-4 border border-white/20 hover:border-white transition-all duration-300">
                  Diagnostics
                </button>

              </div>

            </div>

            {/* SIDE LABEL */}

            <div className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 rotate-90 origin-right">

              <p className="tracking-[0.5em] text-gray-500 text-xs">
                RANGE ROVER SPECIALIST
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>

  )
}
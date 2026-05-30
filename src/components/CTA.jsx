import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {

  const sectionRef = useRef(null)

  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%"
      }
    })

    tl.fromTo(
      ".cta-title",
      {
        y: 80,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out"
      }
    )

    .fromTo(
      ".cta-text",
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8
      },
      "-=0.7"
    )

    .fromTo(
  ".cta-panel",
  {
    y: 40,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 1
  },
  "-=0.5"
)

    .fromTo(
      ".cta-btn",
      {
        y: 20,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8
      },
      "-=0.5"
    )

  }, [])

  return (

    <section
      ref={sectionRef}
      className="relative py-40 px-6 md:px-16 bg-[#050505] overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/[0.03] blur-[220px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        <h2 className="cta-title text-5xl md:text-8xl xl:text-[9rem] font-semibold leading-[0.9] tracking-tight">

          READY TO
          <br />
          RESTORE YOUR
          <br />
          RANGE ROVER?

        </h2>

        <p className="cta-text mt-10 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">

          Advanced diagnostics. Precision engineering.
          Trusted repair solutions built specifically for
          modern Land Rover and Range Rover systems.

        </p>

        <div className="cta-panel mt-14 mb-14 max-w-4xl mx-auto">

  <div className="
relative
border
border-white/10
bg-white/[0.02]
p-8
md:p-10
overflow-hidden
">

    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

    <div className="grid md:grid-cols-3 gap-8">

      <div>
        <p className="text-gray-500 text-xs uppercase tracking-[0.3em]">
          Diagnostics
        </p>

        <h3 className="text-4xl font-semibold mt-3">
          500+
        </h3>

        <p className="text-gray-400 mt-2 text-sm">
          Vehicle scans completed
        </p>
      </div>

      <div>
        <p className="text-gray-500 text-xs uppercase tracking-[0.3em]">
          Technology
        </p>

        <h3 className="text-4xl font-semibold mt-3">
          TOPIx
        </h3>

        <p className="text-gray-400 mt-2 text-sm">
          Official JLR diagnostic platform
        </p>
      </div>

      <div>
        <p className="text-gray-500 text-xs uppercase tracking-[0.3em]">
          Support
        </p>

        <h3 className="text-4xl font-semibold mt-3">
          24/7
        </h3>

        <p className="text-gray-400 mt-2 text-sm">
          Fast consultation response
        </p>
      </div>

    </div>

  </div>

</div>

        <a
          href="#contact"
          className="
          cta-btn
          inline-flex
          items-center
          mt-12
          px-10
          py-5
          bg-white
          text-black
          font-medium
          hover:bg-gray-300
          transition-all
          duration-300
          "
        >
          BOOK APPOINTMENT
        </a>

      </div>

    </section>

  )
}
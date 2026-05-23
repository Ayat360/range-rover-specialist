import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function ControlPanel() {

  const ref = useRef(null)

  useEffect(() => {

    gsap.fromTo(
      ".cp-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%"
        }
      }
    )

  }, [])

  return (

    <section
      ref={ref}
      className="py-32 px-6 md:px-16 bg-black border-t border-white/10"
    >

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl md:text-6xl font-semibold">
          ENGINEERING
          <br />
          CONTROL PANEL
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl">
          Live system overview of diagnostic operations and vehicle intelligence modules.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="cp-item p-6 border border-white/10 bg-[#0d0d0d]">
            <p className="text-gray-400 text-sm">ECU STATUS</p>
            <h3 className="text-3xl mt-4">ONLINE</h3>
          </div>

          <div className="cp-item p-6 border border-white/10 bg-[#0d0d0d]">
            <p className="text-gray-400 text-sm">DIAGNOSTIC LOAD</p>
            <h3 className="text-3xl mt-4">87%</h3>
          </div>

          <div className="cp-item p-6 border border-white/10 bg-[#0d0d0d]">
            <p className="text-gray-400 text-sm">SYSTEM ACCURACY</p>
            <h3 className="text-3xl mt-4">99.8%</h3>
          </div>

        </div>

      </div>

    </section>

  )
}
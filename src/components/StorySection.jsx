import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function StorySection() {

  const sectionRef = useRef(null)

  useEffect(() => {

    const panels = gsap.utils.toArray(".story-panel")

    panels.forEach((panel)=>{

      gsap.fromTo(
        panel.querySelector(".story-content"),
        {
          y:100,
          opacity:0
        },
        {
          y:0,
          opacity:1,
          duration:1.2,
          ease:"power3.out",

          scrollTrigger:{
            trigger:panel,
            start:"top center",
            end:"bottom center",
            scrub:1
          }
        }
      )

    })

  }, [])

  return (

    <section
      ref={sectionRef}
      className="bg-black"
    >

      {/* PANEL 1 */}

      <div className="story-panel relative h-screen overflow-hidden">

        <img
          src="https://i.pinimg.com/736x/34/8b/8f/348b8fe76bb3f6013c75f07fa4d1f28a.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 h-full flex items-center px-6 md:px-20">

          <div className="story-content max-w-3xl">

            <p className="uppercase tracking-[0.4em] text-gray-400 text-xs md:text-sm mb-5">
              Precision Engineering
            </p>

            <h2 className="text-5xl md:text-8xl font-semibold leading-none">
              BUILT FOR
              <br />
              MODERN
              <br />
              RANGE ROVER
              <br />
              SYSTEMS
            </h2>

          </div>

        </div>

      </div>

      {/* PANEL 2 */}

      <div className="story-panel relative h-screen overflow-hidden">

        <img
          src="https://i.pinimg.com/736x/15/14/aa/1514aaf6564e9de9994e4e62f0b9cd6a.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-20">

          <div className="story-content max-w-2xl text-right">

            <p className="uppercase tracking-[0.4em] text-gray-400 text-xs md:text-sm mb-5">
              Advanced Diagnostics
            </p>

            <h2 className="text-5xl md:text-8xl font-semibold leading-none">
              LIVE
              <br />
              ECU
              <br />
              ANALYSIS
            </h2>

            <p className="mt-8 text-gray-300 leading-relaxed">
              Accurate diagnostics using advanced systems like
              TOPIx and PLUTO JLR for modern electronic modules,
              programming, and intelligent fault tracing.
            </p>

          </div>

        </div>

      </div>

      {/* PANEL 3 */}

      <div className="story-panel relative h-screen overflow-hidden">

        <img
          src="https://i.pinimg.com/736x/00/7f/70/007f70b73a7df3b415ab6e0b9e70e4f3.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 h-full flex items-center px-6 md:px-20">

          <div className="story-content max-w-3xl">

            <p className="uppercase tracking-[0.4em] text-gray-400 text-xs md:text-sm mb-5">
              Luxury Performance
            </p>

            <h2 className="text-5xl md:text-8xl font-semibold leading-none">
              FUTURE
              <br />
              OF ROVER
              <br />
              REPAIR
            </h2>

            <div className="mt-10 flex gap-4 flex-wrap">

              <button className=" px-8 py-4 bg-white text-black font-medium hover:bg-gray-300 transition-all duration-300">
                Book Appointment
              </button>

              <button className=" px-8 py-4 border border-white/20 hover:border-white transition-all duration-300">
                Contact Specialist
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}
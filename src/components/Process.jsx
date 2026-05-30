import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
  {
    number: "01",
    title: "Vehicle Inspection",
    desc: "Initial assessment of vehicle condition and reported issues."
  },

  {
    number: "02",
    title: "Advanced Diagnostics",
    desc: "Deep system scanning using TOPIx and JLR diagnostic tools."
  },

  {
    number: "03",
    title: "Fault Identification",
    desc: "Pinpointing root causes through data analysis and testing."
  },

  {
    number: "04",
    title: "Repair & Programming",
    desc: "Precision repair, coding and module configuration."
  },

  {
    number: "05",
    title: "Final Validation",
    desc: "Comprehensive testing to ensure optimal performance."
  }
]

export default function Process() {

  const sectionRef = useRef(null)

  useEffect(() => {

    gsap.fromTo(
      ".process-card",
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%"
        }
      }
    )

  }, [])

  return (

    <section
      ref={sectionRef}
      className="relative py-32 px-6 md:px-16 bg-black overflow-hidden"
    >

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[180px] rounded-full"></div>

      <div className="relative z-10">

        <p className="uppercase tracking-[0.4em] text-gray-500 text-xs md:text-sm mb-5">
          Our Process
        </p>

        <h2 className="text-4xl md:text-7xl font-semibold leading-tight max-w-5xl">
          HOW WE
          <br />
          DIAGNOSE &
          <br />
          REPAIR
        </h2>

        <div className="mt-20 space-y-6">

          {processSteps.map((step) => (

            <div
              key={step.number}
              className="process-card border border-white/10 bg-[#0d0d0d] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:border-white/30 transition-all duration-500"
            >

              <div className="flex items-center gap-8">

                <span className="text-4xl md:text-6xl text-gray-700 font-bold">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 mt-3 max-w-xl">
                    {step.desc}
                  </p>
                </div>

              </div>

              <div className="text-gray-600 text-3xl">
                →
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}
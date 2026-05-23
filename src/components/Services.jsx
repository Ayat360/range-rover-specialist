import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title:"ECU Programming",
    desc:"Advanced module coding and software configuration for modern Range Rover systems."
  },

  {
    title:"Electronic Diagnostics",
    desc:"Deep fault scanning using TOPIx and PLUTO JLR diagnostic systems."
  },

  {
    title:"Wiring Solutions",
    desc:"Precision tracing and repair of complex electrical wiring systems."
  },

  {
    title:"Suspension Repair",
    desc:"Complete air suspension diagnostics and repair solutions."
  },

  {
    title:"Engine Diagnostics",
    desc:"Accurate detection of engine faults and performance issues."
  },

  {
    title:"Module Configuration",
    desc:"Programming and synchronization of vehicle electronic modules."
  },
]

export default function Services() {

  const sectionRef = useRef(null)

  useEffect(() => {

    gsap.fromTo(
      ".service-card",
      {
        y:100,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        stagger:0.15,
        duration:1,
        ease:"power3.out",

        scrollTrigger:{
          trigger:sectionRef.current,
          start:"top 75%"
        }
      }
    )

  }, [])

  return (

    <section
  id="services"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-16 bg-[#050505]"
    >

      {/* background glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[140px] rounded-full"></div>

      <div className="relative z-10">

        <p className="text-gray-500 uppercase tracking-[0.4em] text-xs md:text-sm mb-4">
          Specialized Services
        </p>

        <h2 className="text-4xl md:text-7xl font-semibold leading-tight max-w-4xl">
          ADVANCED
          <br />
          AUTOMOTIVE
          <br />
          ENGINEERING
        </h2>

        {/* cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">

          {services.map((service,index)=>(

            <div
              key={index}
              className="service-card group relative bg-[#0d0d0d] border border-white/10 p-8 overflow-hidden hover:border-white/30 transition-all duration-500"
            >

              {/* animated glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 blur-3xl rounded-full"></div>

              </div>

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <span className="text-gray-500 text-sm">
                    0{index + 1}
                  </span>

                  <span className="w-2 h-2 bg-white rounded-full"></span>

                </div>

                <h3 className="text-2xl font-semibold mt-10">
                  {service.title}
                </h3>

                <p className="text-gray-400 mt-6 leading-relaxed text-sm">
                  {service.desc}
                </p>

              </div>

              {/* hover line */}

              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1px] bg-white transition-all duration-700"></div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}
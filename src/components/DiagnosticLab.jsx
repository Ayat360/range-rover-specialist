import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function DiagnosticLab() {

  const sectionRef = useRef(null)

  useEffect(() => {

    gsap.fromTo(
      ".diag-item",
      {
        y:80,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        stagger:0.2,
        duration:1,
        ease:"power3.out",

        scrollTrigger:{
          trigger:sectionRef.current,
          start:"top 70%"
        }
      }
    )

  }, [])

  return (

    <section
      ref={sectionRef}
      className="relative py-32 px-6 md:px-16 bg-[#030303] overflow-hidden"
    >

      {/* futuristic glow */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/5 blur-[180px] rounded-full"></div>

      {/* grid */}

      <div className="absolute inset-0 opacity-[0.05]">

        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      </div>

      <div className="relative z-10">

        {/* heading */}

        <p className="uppercase tracking-[0.4em] text-gray-500 text-xs md:text-sm mb-5">
          Live Diagnostic Systems
        </p>

        <h2 className="text-4xl md:text-7xl font-semibold leading-tight max-w-5xl">
          FUTURISTIC
          <br />
          DIAGNOSTIC
          <br />
          LAB
        </h2>

        {/* dashboard */}

        <div className="grid lg:grid-cols-2 gap-8 mt-24">

          {/* left panel */}

          <div className="diag-item bg-[#0d0d0d] border border-white/10 p-8">

            <div className="flex items-center justify-between">

              <h3 className="text-xl font-semibold">
                ECU LIVE STATUS
              </h3>

              <div className="flex items-center gap-2">

                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

                <span className="text-green-400 text-sm">
                  ACTIVE
                </span>

              </div>

            </div>

            {/* bars */}

            <div className="mt-10 space-y-8">

              <div>

                <div className="flex justify-between text-sm mb-2">
                  <span>ENGINE CONTROL UNIT</span>
                  <span>98%</span>
                </div>

                <div className="w-full h-2 bg-white/10 overflow-hidden">

                  <div className="w-[98%] h-full bg-white"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between text-sm mb-2">
                  <span>SUSPENSION MODULE</span>
                  <span>87%</span>
                </div>

                <div className="w-full h-2 bg-white/10 overflow-hidden">

                  <div className="w-[87%] h-full bg-white"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between text-sm mb-2">
                  <span>TRANSMISSION SYSTEM</span>
                  <span>93%</span>
                </div>

                <div className="w-full h-2 bg-white/10 overflow-hidden">

                  <div className="w-[93%] h-full bg-white"></div>

                </div>

              </div>

            </div>

          </div>

          {/* right panel */}

          <div className="diag-item bg-[#0d0d0d] border border-white/10 p-8 relative overflow-hidden">

            <div className="flex items-center justify-between">

              <h3 className="text-xl font-semibold">
                LIVE SCAN ANALYTICS
              </h3>

              <span className="text-gray-500 text-sm">
                TOPIx SYSTEM
              </span>

            </div>

            {/* fake waveform */}

            <div className="mt-14 space-y-6">

              {[1,2,3,4,5].map((item,index)=>(

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <span className="text-xs text-gray-500 w-14">
                    CH-{item}
                  </span>

                  <div className="flex-1 h-10 relative overflow-hidden bg-white/5">

                    <div className="absolute inset-0 flex items-center">

                      <div className="wave"></div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* animated glow */}

            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/10 blur-[120px] rounded-full"></div>

          </div>

        </div>

        {/* bottom cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="diag-item bg-[#0d0d0d] border border-white/10 p-6">

            <p className="text-gray-500 text-sm">
              MODULE DETECTION
            </p>

            <h3 className="text-4xl font-semibold mt-4">
              24+
            </h3>

          </div>

          <div className="diag-item bg-[#0d0d0d] border border-white/10 p-6">

            <p className="text-gray-500 text-sm">
              SYSTEM ACCURACY
            </p>

            <h3 className="text-4xl font-semibold mt-4">
              99%
            </h3>

          </div>

          <div className="diag-item bg-[#0d0d0d] border border-white/10 p-6">

            <p className="text-gray-500 text-sm">
              LIVE ANALYTICS
            </p>

            <h3 className="text-4xl font-semibold mt-4">
              ACTIVE
            </h3>

          </div>

        </div>

      </div>

    </section>

  )
}
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Booking() {

  const sectionRef = useRef(null)

  useEffect(() => {

    gsap.fromTo(
      ".booking-item",
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
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
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-16 bg-black overflow-hidden"
    >

      {/* glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/5 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* heading */}

        <p className="uppercase tracking-[0.4em] text-gray-500 text-xs md:text-sm mb-5 text-center">
          Appointment Booking
        </p>

        <h2 className="text-4xl md:text-7xl font-semibold text-center leading-tight">
          BOOK YOUR
          <br />
          DIAGNOSTIC SESSION
        </h2>

        <p className="text-gray-400 text-center mt-6 max-w-2xl mx-auto">
          Precision engineering starts with the right diagnosis.
          Send your request and get expert Range Rover analysis.
        </p>

        {/* form */}

        <div className="mt-20 grid md:grid-cols-2 gap-6">

          <input
            className="booking-item bg-[#0d0d0d] border border-white/10 p-5 text-white outline-none"
            placeholder="Full Name"
          />

          <input
            className="booking-item bg-[#0d0d0d] border border-white/10 p-5 text-white outline-none"
            placeholder="Phone Number"
          />

          <input
            className="booking-item bg-[#0d0d0d] border border-white/10 p-5 text-white outline-none"
            placeholder="Vehicle Model (e.g Range Rover Sport)"
          />

          <select className="booking-item bg-[#0d0d0d] border border-white/10 p-5 text-white outline-none">
            <option>Diagnostic Service</option>
            <option>ECU Programming</option>
            <option>Wiring Repair</option>
            <option>Suspension Fix</option>
          </select>

        </div>

        {/* message */}

        <textarea
          className="booking-item w-full mt-6 bg-[#0d0d0d] border border-white/10 p-5 text-white outline-none h-[150px]"
          placeholder="Describe your vehicle issue..."
        ></textarea>

        {/* button */}

        <div className="text-center mt-10">

          <button className="magnetic px-10 py-4 bg-white text-black font-semibold hover:bg-gray-300 transition-all duration-300">
            Send Booking Request
          </button>

        </div>

      </div>

    </section>

  )
}
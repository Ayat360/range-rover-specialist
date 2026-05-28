import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {

  const footerRef = useRef(null)

  useEffect(() => {

    gsap.fromTo(
      ".footer-reveal",
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%"
        }
      }
    )

  }, [])

  return (

    <footer
      ref={footerRef}
      className="relative bg-black border-t border-white/10 overflow-hidden"
    >

      {/* glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.03] blur-[180px] rounded-full"></div>

      <div className="relative z-10 px-6 md:px-16 py-24">

        {/* top area */}
        <div className="footer-reveal">

          <p className="uppercase tracking-[0.5em] text-gray-500 text-xs mb-5">
            Precision Engineering
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold leading-none max-w-5xl">
            RANGE ROVER
            <br />
            SPECIALIST
          </h2>

          <p className="mt-8 text-gray-400 max-w-2xl leading-relaxed">
            Advanced diagnostics, ECU programming, suspension systems,
            electronic fault tracing and complete engineering solutions
            for modern Range Rover vehicles.
          </p>

        </div>

        {/* divider */}
        <div className="footer-reveal mt-16 mb-16 h-px bg-white/10"></div>

        {/* content */}
        <div className="grid lg:grid-cols-3 gap-12">

          {/* navigation */}
          <div className="footer-reveal">

            <p className="text-gray-500 uppercase tracking-[0.4em] text-xs mb-8">
              Navigation
            </p>

            <div className="space-y-4">

              <a href="#home" className="block hover:text-white transition">
                Home
              </a>

              <a href="#services" className="block hover:text-white transition">
                Services
              </a>

              <a href="#gallery" className="block hover:text-white transition">
                Gallery
              </a>

              <a href="#contact" className="block hover:text-white transition">
                Booking
              </a>

            </div>

          </div>

          {/* capabilities */}
          <div className="footer-reveal">

            <p className="text-gray-500 uppercase tracking-[0.4em] text-xs mb-8">
              Capabilities
            </p>

            <div className="space-y-4 text-gray-300">

              <p>ECU Programming</p>
              <p>Electronic Diagnostics</p>
              <p>Air Suspension Repair</p>
              <p>Module Configuration</p>
              <p>Wiring Solutions</p>

            </div>

          </div>

          {/* contact */}
          <div className="footer-reveal">

            <p className="text-gray-500 uppercase tracking-[0.4em] text-xs mb-8">
              Contact
            </p>

            <div className="space-y-4 text-gray-300">

              <p>312 Old Ojo Road, Lagos</p>
              <p>+234 907 985 1714</p>
              <p>TOPIx Diagnostic System</p>

            </div>

            <a
              href="#contact"
              className="
              inline-flex
              items-center
              mt-10
              px-7
              py-4
              bg-white
              text-black
              font-medium
              hover:bg-gray-300
              transition
              "
            >
              Book Appointment
            </a>

          </div>

        </div>

        {/* bottom */}
        <div className="footer-reveal mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500">

          <span>
            © {new Date().getFullYear()} Range Rover Specialist
          </span>

          <span>
            Advanced Diagnostics • ECU Programming • Engineering Solutions
          </span>

        </div>

      </div>

    </footer>

  )
}
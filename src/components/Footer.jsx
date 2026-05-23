import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {

  const footerRef = useRef(null)

  useEffect(() => {

    gsap.fromTo(
      ".footer-item",
      {
        y: 80,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%"
        }
      }
    )

  }, [])

  return (

    <footer
      ref={footerRef}
      className="relative bg-black border-t border-white/10 py-20 px-6 md:px-16 overflow-hidden"
    >

      {/* glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[160px] rounded-full"></div>

      <div className="relative z-10 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div className="footer-item">
          <h1 className="text-xl tracking-[0.3em] uppercase font-semibold">
            Range Rover Specialist
          </h1>

          <p className="text-gray-400 mt-6 leading-relaxed text-sm">
            Precision diagnostics, advanced ECU programming, and expert Land Rover engineering.
            Built for performance. Engineered for trust.
          </p>

          <p className="text-gray-500 mt-6 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-item">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-6">
            Navigation
          </h2>

          <div className="flex flex-col gap-4 text-gray-300 text-sm">

            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#diagnostics" className="hover:text-white transition">Diagnostics</a>
            <a href="#models" className="hover:text-white transition">Models</a>
            <a href="#contact" className="hover:text-white transition">Booking</a>

          </div>
        </div>

        {/* CONTACT */}
        <div className="footer-item">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-6">
            Contact
          </h2>

          <div className="text-gray-300 text-sm space-y-4">

            <p>📍 312 Old Ojo Road, Oluti Lagos</p>
            <p>📞 +234 907 985 1714</p>
            <p>⚙️ TOPIx & PLUTO JLR Systems</p>

          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="magnetic inline-block mt-8 px-6 py-3 bg-white text-black font-medium hover:bg-gray-300 transition"
          >
            Book Diagnosis
          </a>

        </div>

      </div>

      {/* bottom line */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-gray-500 text-xs">
        Built with precision engineering mindset — Range Rover Specialist Lab
      </div>

    </footer>

  )
}
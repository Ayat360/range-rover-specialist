import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: "Range Rover Sport Owner",
    review:
      "Solved a suspension fault that multiple workshops couldn't diagnose. Professional and accurate service."
  },

  {
    name: "Velar Owner",
    review:
      "The diagnostic process was detailed and transparent. Fault was identified and fixed quickly."
  },

  {
    name: "Discovery Owner",
    review:
      "Excellent ECU programming service. Vehicle performance improved immediately."
  }
]

export default function Testimonials() {

  const sectionRef = useRef(null)

  useEffect(() => {

    gsap.fromTo(
      ".testimonial-card",
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
          trigger: sectionRef.current,
          start: "top 75%"
        }
      }
    )

  }, [])

  return (

    <section
      ref={sectionRef}
      className="py-32 px-6 md:px-16 bg-[#050505]"
    >

      <p className="uppercase tracking-[0.4em] text-gray-500 text-xs md:text-sm mb-5">
        Client Feedback
      </p>

      <h2 className="text-4xl md:text-7xl font-semibold leading-tight max-w-5xl">
        TRUSTED BY
        <br />
        RANGE ROVER
        <br />
        OWNERS
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-20">

        {testimonials.map((item, index) => (

          <div
            key={index}
            className="testimonial-card bg-[#0d0d0d] border border-white/10 p-8"
          >

            <div className="text-xl mb-6">
              ★★★★★
            </div>

            <p className="text-gray-400 leading-relaxed">
              {item.review}
            </p>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="font-medium">
                {item.name}
              </h4>
            </div>

          </div>

        ))}

      </div>

    </section>

  )
}
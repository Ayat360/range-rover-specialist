import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {

  const titleRef = useRef(null)
  const textRef = useRef(null)
  const buttonRef = useRef(null)
  const imageRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    gsap.to(cardRef.current, {
  y: -15,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
})

    tl.fromTo(
      titleRef.current,
      {
        y:100,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        duration:1.2,
        ease:"power4.out"
      }
    )

    .fromTo(
      textRef.current,
      {
        y:40,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        duration:1,
      },
      "-=0.7"
    )

    .fromTo(
      buttonRef.current,
      {
        opacity:0,
        y:20
      },
      {
        opacity:1,
        y:0,
        duration:0.8
      },
      "-=0.6"
    )

    .fromTo(
      imageRef.current,
      {
        scale:1.2,
        opacity:0
      },
      {
        scale:1,
        opacity:0.45,
        duration:1.8,
        ease:"power3.out"
      },
      "-=1.5"
    )

  }, [])

  return (
    <section
  id="home"
  className="relative min-h-screen overflow-hidden bg-black flex items-center"
>

      {/* background image */}

      <img
        ref={imageRef}
        src="https://i.pinimg.com/1200x/ac/e1/da/ace1da96aa30a2eae2e038c363da8db6.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* overlay */}

      <div className="absolute inset-0 bg-black/70"></div>

      {/* grid */}

      <div className="absolute inset-0 opacity-[0.08]">
  <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
</div>

      {/* content */}

      <div className="relative z-10 px-6 md:px-16 max-w-7xl">

        <p className="text-gray-400 uppercase tracking-[0.4em] mb-6 text-xs md:text-sm">
          Advanced Rover Diagnostics & Repair
        </p>

        <h1
  ref={titleRef}
  className="text-5xl md:text-8xl font-semibold leading-[0.9] tracking-[-0.04em]"
>
          ADVANCED
          <br />
          RANGE ROVER
          <br />
          DIAGNOSTICS
        </h1>

        <p
          ref={textRef}
          className="mt-8 max-w-2xl text-gray-400 text-sm md:text-lg leading-relaxed"
        >
          Range Rover expert specializing in diagnostics, repairs,
          and programming of modern Land Rover systems using
          advanced tools like TOPIx and PLUTO JLR.
        </p>

        <div
          ref={buttonRef}
          className="mt-10 flex flex-wrap gap-4"
        >

          <a
  href="#contact"
  className="inline-flex px-8 py-4 bg-white text-black font-medium hover:bg-gray-300 transition-all duration-300"
>
  Book Appointment
</a>

          <a
  href="#services"
  className="inline-flex px-8 py-4 border border-white/20 hover:border-white transition-all duration-300"
>
  Explore Services
</a>

        </div>

      </div>

      {/* floating diagnostic card */}

      <div
  ref={cardRef}
  className="absolute bottom-10 right-10 hidden lg:block"
>

        <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 w-[320px]">

          <div className="flex items-center justify-between">

            <p className="text-sm text-gray-400">
              SYSTEM STATUS
            </p>

            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

          </div>

          <div className="mt-6 space-y-4">

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>ECU CONNECTION</span>
                <span>98%</span>
              </div>

              <div className="w-full h-1 bg-white/10">
                <div className="w-[98%] h-full bg-white"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>SUSPENSION SCAN</span>
                <span>87%</span>
              </div>

              <div className="w-full h-1 bg-white/10">
                <div className="w-[87%] h-full bg-white"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>MODULE STATUS</span>
                <span>100%</span>
              </div>

              <div className="w-full h-1 bg-white/10">
                <div className="w-[100%] h-full bg-white"></div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
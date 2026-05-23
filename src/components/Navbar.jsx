import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const navItems = [
  {
    name: "Home",
    link: "#home",
    id: "home",
  },

  {
    name: "Services",
    link: "#services",
    id: "services",
  },

  {
    name: "Diagnostics",
    link: "#diagnostics",
    id: "diagnostics",
  },

  {
    name: "Models",
    link: "#models",
    id: "models",
  },
]

export default function Navbar() {

  const navRef = useRef(null)

  const [activeSection, setActiveSection] =
    useState("home")

  useEffect(() => {

    let lastScroll = 0

    const handleScroll = () => {

      const currentScroll = window.pageYOffset

      // BACKGROUND BLUR

      if (currentScroll > 50) {

        navRef.current.classList.add(
          "bg-black/50",
          "backdrop-blur-xl",
          "border-white/10"
        )

      } else {

        navRef.current.classList.remove(
          "bg-black/50",
          "backdrop-blur-xl",
          "border-white/10"
        )

      }

      // HIDE / SHOW NAVBAR

      if (
        currentScroll > lastScroll &&
        currentScroll > 100
      ) {

        gsap.to(navRef.current, {
          y: -120,
          duration: 0.5,
          ease: "power3.out",
        })

      } else {

        gsap.to(navRef.current, {
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        })

      }

      lastScroll = currentScroll

      // ACTIVE SECTION DETECTION

      const sections =
        document.querySelectorAll("section")

      sections.forEach((section) => {

        const top = currentScroll
        const offset = section.offsetTop - 200
        const height = section.offsetHeight
        const id = section.getAttribute("id")

        if (
          top >= offset &&
          top < offset + height
        ) {

          setActiveSection(id)

        }

      })

    }

    window.addEventListener("scroll", handleScroll)

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      )

  }, [])

  return (

    <nav
      ref={navRef}
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      px-6
      md:px-12
      py-5
      border-b
      border-transparent
      transition-all
      duration-500
      "
    >

      <div className="flex items-center justify-between">

        {/* LOGO */}

        <a
          href="#home"
          className="
          text-sm
          md:text-base
          tracking-[0.3em]
          font-semibold
          uppercase
          "
        >
          Range Rover Specialist
        </a>

        {/* NAVIGATION */}

        <div className="hidden md:flex items-center gap-10">

          {navItems.map((item, index) => (

            <a
              key={index}
              href={item.link}
              className={`
              relative
              text-sm
              tracking-wide
              transition-all
              duration-300
              hover:text-white

              ${
                activeSection === item.id
                  ? "text-white"
                  : "text-gray-400"
              }
              `}
            >

              {item.name}

              {/* ACTIVE LINE */}

              <span
                className={`
                absolute
                left-0
                -bottom-2
                h-[1px]
                bg-white
                transition-all
                duration-500

                ${
                  activeSection === item.id
                    ? "w-full"
                    : "w-0"
                }
                `}
              ></span>

            </a>

          ))}

          {/* CTA */}

          <button
            className="
            magnetic
            px-6
            py-3
            border
            border-white/20
            text-sm
            hover:border-white
            hover:bg-white
            hover:text-black
            transition-all
            duration-500
            "
          >
            Book Appointment
          </button>

        </div>

      </div>

    </nav>

  )
}
import { useEffect, useState } from "react"
import { FiArrowUp } from "react-icons/fi"

export default function BackToTop() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 700) {
        setVisible(true)
      } else {
        setVisible(false)
      }

    }

    window.addEventListener("scroll", toggleVisibility)

    return () =>
      window.removeEventListener("scroll", toggleVisibility)

  }, [])

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

  }

  return (

    <button
      onClick={scrollToTop}
      className={`
      fixed
      bottom-24
      right-6
      z-50
      transition-all
      duration-500

      ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }
      `}
    >

      <div
        className="
        w-14
        h-14
        bg-[#0d0d0d]
        border
        border-white/10
        hover:border-white/30
        flex
        items-center
        justify-center
        transition-all
        duration-300
        "
      >

        <div className="flex flex-col items-center">

  <FiArrowUp size={18} />

  <div className="w-px h-4 bg-white/40 mt-1"></div>

</div>

      </div>

    </button>

  )

}
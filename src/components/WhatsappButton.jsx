import { FaWhatsapp } from "react-icons/fa"

export default function WhatsappButton() {

  return (

    <a
      href="https://wa.me/2349079851714"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      group
      "
    >

      <div
        className="
        flex
        items-center
        gap-3
        px-5
        py-4
        bg-black
        border
        border-white/15
        hover:border-white/30
        transition-all
        duration-300
        "
      >

        <FaWhatsapp size={20} />

        <span className="text-sm hidden md:block">
          WhatsApp Support
        </span>

      </div>

    </a>

  )
}
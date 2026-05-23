import { motion } from "framer-motion"

export default function CarCard({ image, title, desc }) {

  return (

    <motion.div

      whileHover={{
        rotateY: 12,
        rotateX: -8,
        scale: 1.03
      }}

      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15
      }}

      className="
        relative
        w-full
        h-[450px]
        bg-black
        overflow-hidden
        border
        border-white/10
        perspective
        cursor-pointer
      "
    >

      {/* IMAGE */}
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-end">

        <h2 className="text-3xl md:text-4xl font-semibold">
          {title}
        </h2>

        <p className="text-gray-300 mt-3 text-sm">
          {desc}
        </p>

      </div>

    </motion.div>

  )
}
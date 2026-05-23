import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const gallery = [

  {
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop",
    title:"Luxury Diagnostics"
  },

  {
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    title:"Advanced Engineering"
  },

  {
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop",
    title:"Modern Rover Systems"
  },

  {
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=2070&auto=format&fit=crop",
    title:"Electronic Modules"
  },

]

export default function Gallery() {

  const sectionRef = useRef(null)

  useEffect(() => {

    gsap.fromTo(
      ".gallery-item",
      {
        y:120,
        opacity:0,
      },
      {
        y:0,
        opacity:1,
        stagger:0.2,
        duration:1.2,
        ease:"power3.out",

        scrollTrigger:{
          trigger:sectionRef.current,
          start:"top 75%",
        }
      }
    )

  }, [])

  return (

    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-16 bg-black overflow-hidden"
    >

      {/* glow */}

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[180px] rounded-full"></div>

      <div className="relative z-10">

        {/* heading */}

        <p className="uppercase tracking-[0.4em] text-gray-500 text-xs md:text-sm mb-5">
          Visual Showcase
        </p>

        <h2 className="text-4xl md:text-7xl font-semibold leading-tight max-w-5xl">
          ENGINEERING
          <br />
          GALLERY
        </h2>

        {/* gallery grid */}

        <div className="grid md:grid-cols-2 gap-6 mt-20">

          {gallery.map((item,index)=>(

            <div
              key={index}
              className={`
              gallery-item
              group
              relative
              overflow-hidden
              bg-[#0d0d0d]

              ${
                index === 0 || index === 3
                ? "md:h-[650px]"
                : "md:h-[500px]"
              }

              h-[400px]
              `}
            >

              {/* image */}

              <img
                src={item.image}
                alt=""
                className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                group-hover:scale-110
                transition-transform
                duration-700
                "
              />

              {/* overlay */}

              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-all duration-500"></div>

              {/* content */}

              <div className="absolute bottom-0 left-0 p-8 z-10">

                <p className="text-gray-400 text-sm uppercase tracking-[0.3em]">
                  Range Rover Specialist
                </p>

                <h3 className="text-3xl md:text-4xl font-semibold mt-3">
                  {item.title}
                </h3>

              </div>

              {/* hover line */}

              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-700"></div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}
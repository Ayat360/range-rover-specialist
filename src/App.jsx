import Cursor from "./components/Cursor"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Models from "./components/Models"
import DiagnosticLab from "./components/DiagnosticLab"
import StorySection from "./components/StorySection"
import Gallery from "./components/Gallery"
import Booking from "./components/Booking"
import Footer from "./components/Footer"

import Loader from "./components/Loader"
import useSound from "./hooks/useSound"

export default function App() {

  useSound() // 🔥 THIS FIXES IT

  return (
    <>
      <Loader />
      <Cursor />

      <Navbar />
      <Hero />
      <Services />
      <Models />
      <DiagnosticLab />
      <StorySection />
      <Gallery />
      <Booking />
      <Footer />
    </>
  )
}
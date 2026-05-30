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
import Testimonials from "./components/Testimonials"
import Process from "./components/Process"

import Loader from "./components/Loader"
import ControlPanel from "./components/ControlPanel"

export default function App() {

  return (
    <>
      <Loader />
      <Cursor />

      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Models />
      <DiagnosticLab />
      <StorySection />
      <Gallery />
      <Testimonials />
      <Booking />
      <ControlPanel />
      <Footer />
    </>
  )
}
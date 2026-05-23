import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Models from "./components/Models"
import DiagnosticLab from "./components/DiagnosticLab"
import StorySection from "./components/StorySection"
import Cursor from "./components/Cursor"
import Gallery from "./components/Gallery"
import Booking from "./components/Booking"
import Footer from "./components/Footer"

export default function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Models />
      <DiagnosticLab />
      <StorySection />
      <Cursor />
      <Gallery />
      <Booking />
      <Footer />
    </>
  )
}
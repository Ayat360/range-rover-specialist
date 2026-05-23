import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Models from "./components/Models"
import DiagnosticLab from "./components/DiagnosticLab"
import StorySection from "./components/StorySection"

export default function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Models />
      <DiagnosticLab />
      <StorySection />
    </>
  )
}
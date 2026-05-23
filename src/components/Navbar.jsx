export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex items-center justify-between">

      <div>
        <h1 className="text-sm md:text-base tracking-[0.3em] font-semibold uppercase">
          Range Rover Specialist
        </h1>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">

        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Diagnostics</a>
        <a href="#">Contact</a>

      </div>

    </nav>
  )
}
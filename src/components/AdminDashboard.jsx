import { useEffect, useState } from "react"
import gsap from "gsap"

export default function AdminDashboard() {

  const [appointments, setAppointments] = useState([])

  // FETCH DATA
  const fetchAppointments = async () => {

    try {

    const res = await fetch(
  `${import.meta.env.VITE_API_URL}/api/appointments`
)
      const data = await res.json()

      setAppointments(data)

    } catch (err) {
      console.log(err)
    }

  }

useEffect(() => {

  // LOAD INITIAL DATA
  const loadData = async () => {
    await fetchAppointments()
  }

  loadData()

  // AUTO REFRESH
  const interval = setInterval(() => {
    fetchAppointments()
  }, 5000)

  // GSAP
  gsap.fromTo(
    ".admin-card",
    {
      y: 80,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out"
    }
  )

  // CLEANUP
  return () => clearInterval(interval)

}, [])


  return (

<div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

  {/* TOP HEADER */}
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

    <div>
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
        CONTROL PANEL
      </h1>
      <p className="text-gray-400 mt-2">
        Live diagnostic booking intelligence
      </p>
    </div>

    <button className=" px-6 py-3 bg-white text-black font-medium hover:bg-gray-300 transition">
      Refresh System
    </button>

  </div>

  {/* STATS CARDS */}
  <div className="grid md:grid-cols-3 gap-6 mb-12">

    <div className="bg-white/5 border border-white/10 p-6">
      <p className="text-gray-400 text-sm">Total Requests</p>
      <h2 className="text-3xl font-semibold">{appointments.length}</h2>
    </div>

    <div className="bg-white/5 border border-white/10 p-6">
      <p className="text-gray-400 text-sm">Active Today</p>
      <h2 className="text-3xl font-semibold">
        {appointments.filter(a => {
          const today = new Date().toDateString()
          return new Date(a.createdAt).toDateString() === today
        }).length}
      </h2>
    </div>

    <div className="bg-white/5 border border-white/10 p-6">
      <p className="text-gray-400 text-sm">System Status</p>
      <h2 className="text-3xl font-semibold text-green-400">
        LIVE
      </h2>
    </div>

  </div>

      {/* TABLE */}
<div className="grid md:grid-cols-2 gap-6">

  {appointments.map((item) => (
    <div
      key={item._id}
      className="admin-card bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition"
    >

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{item.name}</h2>

        <span className={`text-xs px-3 py-1 border ${
          item.status === "Done"
            ? "border-green-500 text-green-400"
            : "border-yellow-500 text-yellow-400"
        }`}>
          {item.status}
        </span>
      </div>

      {/* INFO */}
      <div className="mt-4 text-sm text-gray-300 space-y-1">
        <p>📞 {item.phone}</p>
        <p>🚗 {item.vehicle}</p>
        <p>🔧 {item.service}</p>
      </div>

      {/* MESSAGE */}
      <div className="mt-4 text-gray-400 italic border-t border-white/10 pt-3">
        "{item.message}"
      </div>

      {/* ACTIONS */}
      <div className="flex gap-3 mt-5">
<button
  onClick={async () => {

    try {

      await fetch(
        `${import.meta.env.VITE_API_URL}/api/appointments/${item._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            status: "Done"
          })
        }
      )

      // REFRESH DATA INSTANTLY
      fetchAppointments()

    } catch (err) {
      console.log(err)
    }

  }}
  className="px-3 py-2 bg-green-500 text-black text-sm"
>
  Mark Done
</button>

        <button
          onClick={async () => {
            await fetch(`${import.meta.env.VITE_API_URL}/api/appointments/${item._id}`, {
              method: "DELETE"
            })

            window.location.reload()
          }}
          className=" px-3 py-2 bg-red-500 text-white text-sm"
        >
          Delete
        </button>

      </div>

    </div>
  ))}

</div>
    </div>

  )
}
import { useEffect, useState } from "react"
import gsap from "gsap"

export default function AdminDashboard() {

  const [appointments, setAppointments] = useState([])

  // FETCH DATA
  const fetchAppointments = async () => {

    try {

      const res = await fetch("https://range-rover-specialist.onrender.com/api/appointments")
      const data = await res.json()

      setAppointments(data)

    } catch (err) {
      console.log(err)
    }

  }

useEffect(() => {

  const loadAppointments = async () => {
    await fetchAppointments()
  }

  loadAppointments()

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

}, [])


  return (

    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

      {/* HEADER */}
      <div className="mb-10">

        <h1 className="text-4xl md:text-6xl font-semibold">
          ADMIN CONTROL PANEL
        </h1>

        <p className="text-gray-400 mt-3">
          Live diagnostic booking requests
        </p>

        <button
          onClick={fetchAppointments}
          className="mt-6 px-6 py-3 bg-white text-black font-medium hover:bg-gray-300"
        >
          Refresh Data
        </button>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">

        <table className="w-full text-left border border-white/10">

          <thead className="bg-white/5">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Vehicle</th>
              <th className="p-4">Service</th>
              <th className="p-4">Message</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>

          <tbody>

            {appointments.map((item, index) => (

              <tr
                key={index}
                className="border-t border-white/10 admin-card hover:bg-white/5 transition"
              >

                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.phone}</td>
                <td className="p-4">{item.vehicle}</td>
                <td className="p-4">{item.service}</td>
                <td className="p-4 text-gray-400">
                  {item.message}
                </td>
                <td className="p-4 text-gray-500">
                  {new Date(item.createdAt).toLocaleString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )
}
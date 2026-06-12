import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AdminLogin() {

  const [pin, setPin] = useState("")
  const navigate = useNavigate()

  const handleLogin = async () => {

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/admin/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ pin })
      }
    )

    const data = await res.json()

    if (data.success) {

      sessionStorage.setItem("adminAuth", "true")

      navigate("/admin")

    } else {

      alert("Wrong PIN")

    }

  }

  return (

    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="w-[400px] border border-white/10 p-8">

        <h1 className="text-3xl text-white mb-6">
          Admin Access
        </h1>

        <input
          type="password"
          placeholder="Enter PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="w-full p-4 bg-[#0d0d0d] text-white border border-white/10"
        />

        <button
          onClick={handleLogin}
          className="w-full mt-4 py-4 bg-white text-black"
        >
          Access Dashboard
        </button>

      </div>

    </div>

  )
}
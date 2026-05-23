import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// =====================
// CONNECT DATABASE
// =====================
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected 🔥"))
.catch(err => console.log(err))

// =====================
// APPOINTMENT MODEL
// =====================
const AppointmentSchema = new mongoose.Schema({

  name: String,
  phone: String,
  vehicle: String,
  service: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }

})

const Appointment =
mongoose.model("Appointment", AppointmentSchema)

// =====================
// ROUTES
// =====================

// CREATE APPOINTMENT
app.post("/api/appointments", async (req, res) => {

  try {

    const newAppointment =
    await Appointment.create(req.body)

    res.status(201).json({
      success: true,
      data: newAppointment
    })

  } catch (err) {

    res.status(500).json({
      success: false,
      error: err.message
    })

  }

})

// GET ALL APPOINTMENTS (ADMIN)
app.get("/api/appointments", async (req, res) => {

  const data = await Appointment.find().sort({ createdAt: -1 })

  res.json(data)

})

// =====================
// START SERVER
// =====================
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
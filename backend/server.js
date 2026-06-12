import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// =====================
// START SERVER
// =====================
const PORT = process.env.PORT || 5000

// =====================
// CONNECT DATABASE
// =====================
mongoose.set("bufferCommands", false)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected 🔥")

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })

  })
  .catch(err => {
    console.log("MongoDB connection failed ❌", err)
  })

  // =====================
// PIN AUTH (SIMPLE ADMIN LOGIN)
// =====================
app.post("/api/admin/login", (req, res) => {

  const { pin } = req.body

  if (pin === process.env.ADMIN_PIN) {

    return res.json({
      success: true
    })

  }

  res.status(401).json({
    success: false,
    message: "Invalid PIN"
  })

})


// =====================
// APPOINTMENT MODEL
// =====================
const AppointmentSchema = new mongoose.Schema({

  name: String,
  phone: String,
  vehicle: String,
  service: String,
  message: String,

  // NEW STATUS FIELD
  status: {
    type: String,
    default: "Pending"
  },

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

    console.log("REQ BODY:", req.body)

    const newAppointment =
      await Appointment.create(req.body)

    console.log("SAVED:", newAppointment)

    res.status(201).json({
      success: true,
      data: newAppointment
    })

  } catch (err) {

    console.log("SERVER ERROR:", err)

    res.status(500).json({
      success: false,
      error: err.message
    })

  }

})

// GET ALL APPOINTMENTS (ADMIN)
app.get("/api/appointments", async (req, res) => {

  try {

    const data =
    await Appointment.find().sort({ createdAt: -1 })

    res.json(data)

  } catch (err) {

    console.log(err)

    res.status(500).json({
      error: err.message
    })

  }

})
// =====================
// UPDATE STATUS
// =====================
app.patch("/api/appointments/:id", async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    )

    res.json({ success: true, data: updated })
  } catch (err) {
    res.status(500).json({ success: false, error: err.message })
  }
})


// =====================
// DELETE APPOINTMENT
// =====================
app.delete("/api/appointments/:id", async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id)

    res.json({ success: true, message: "Deleted" })
  } catch (err) {
    res.status(500).json({ success: false, error: err.message })
  }
})

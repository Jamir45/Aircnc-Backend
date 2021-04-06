const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(cors())

// Connecting Database with our server
const {DBConnection} = require('./Database/dbConnection')
DBConnection()

// Import placeBooking route
const placeBookingRoute = require('./Routers/placeBookingRoute')
app.use('/', placeBookingRoute)

// Aircnc Server is Running.
app.get('/', async(req, res) => {
   try {
      res.send(`<h3>Welcome to Aircnc. Currently Aircnc Server is running.</h3>`)
   } catch (error) {
      res.status(404).send(error.message)
   }
})


const PORT = process.env.PORT || 3005;
app.listen( PORT, () => console.log(`Server is running on PORT ${PORT}`))
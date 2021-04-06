const express = require('express')
const { requireLogin } = require('../CustomMiddleware/requireLogin')
const router = express.Router()

// import schema
const PlaceBookingSchema = require('../Models/placeBookingModel')

// post placeBooking data
router.post('/post-placeBooking', requireLogin, async (req, res) => {
   const {adult, baby, child, arrival, departure, location, userComment, hotel, userDetails, paymentDetails} = req.body.placeBooking
   console.log(loggedInUser)
   try {
      const data = new PlaceBookingSchema({
         adult,
         baby,
         child,
         arrival,
         departure,
         location,
         userComment,
         hotel,
         userDetails,
         paymentDetails,
         bookedBy: loggedInUser.uid
      })
      await data.save()
      res.send({data, success:"Place Booking Is Successful."})
   } catch (error) {
      res.status(400).send({error:"Something Went Wrong"})
   }
})

// get placeBooking data
router.get('/get-placeBooking', requireLogin, async (req, res) => {
   try {
      const data = await PlaceBookingSchema.find({bookedBy:loggedInUser.uid})
      res.send(data)
   } catch (error) {
      res.status(400).send({error:"Something Went Wrong"})
   }
})


module.exports = router
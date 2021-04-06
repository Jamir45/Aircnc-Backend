const mongoose = require('mongoose')


const placeBooking = new mongoose.Schema({
   adult: {type: Number},
   baby: {type: Number},
   child: {type: Number},
   arrival: {type: String},
   departure: {type: String},
   location: {type: String},
   userComment: {type: String},
   hotel: {},
   userDetails: {},
   paymentDetails: {},
   bookedBy: {type: String},
})

const PlaceBookingSchema = mongoose.model("PlaceBookingData", placeBooking)
module.exports = PlaceBookingSchema
const joi = require('joi');

module.exports.listingSchema = joi.object({
  listing: joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    location: joi.string().required(),
    country: joi.string().required(),
    price: joi.number().required().min(0),
    image: joi.string().allow("", null),
    category: joi.string().valid("trending", "rooms", "iconic_city", "mountains", "castles", "amazing_pools", "camping", "farms", "boats", "domes").required()
  }).required(),
  // geometry: joi.object({
  //   type: joi.string().required(), // Ensure geometry.type is required
  //   coordinates: joi.array().items(joi.number()).required() // You may have other validation rules for coordinates
  // }).required()
});

module.exports.reviewSchema = joi.object({
  review: joi.object({
    rating: joi.number().required().min(1).max(5),
    comment: joi.string().required()
  }).required(),
});

module.exports.bookingSchema = joi.object({
  name: joi.string().required(),
  aadharNumber: joi.string().required(),
  dateOfBooking: joi.date().required(),
  dateOfExit: joi.date().required()
});





///////////////////////////////////






// const joi = require('joi');

// module.exports.listingSchema = joi.object({
//     listing : joi.object({
//         title: joi.string().required(),
//         description: joi.string().required(),
//         location: joi.string().required(),
//         country: joi.string().required(),
//         price: joi.number().required().min(0),
//         image: joi.string().allow("", null)
//     }).required(),
// });

// module.exports.reviewSchema = joi.object({
//     review: joi.object({
//         rating: joi.number().required().min(1).max(5),
//         comment: joi.string().required()
//     }).required(),
// })
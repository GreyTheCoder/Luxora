const Joi = require('joi');

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    category: Joi.string()
      .valid(
        "Trending", "Rooms", "Amazing Pools", "Beach", "Mountains",
        "Farms", "Campaign", "Drinks", "Arctic", "Domes", "Boats"
      )
      .required(),
  }).required(),
});


module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().min(1).max(5).required()
  }).required()
});


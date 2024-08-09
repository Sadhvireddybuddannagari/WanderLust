// const Listing = require("./models/listing");
// const Review = require("./models/review");
// const ExpressError = require("./utils/ExpressError.js");
// const { listingSchema, reviewSchema, bookingSchema } = require("./schema.js");

// module.exports.isLoggedIn = (req, res, next) => {
//   if (!req.isAuthenticated()) {
//     req.session.redirectUrl = req.originalUrl;
//     req.flash("error", "You must be logged in to Create Listing!");
//     return res.redirect("/login");
//   }
//   next();
// };

// module.exports.saveRedirectUrl = (req, res, next) => {
//   if (req.session.redirectUrl) {
//     res.locals.redirectUrl = req.session.redirectUrl;
//   }
//   next();
// };

// module.exports.isOwner = async (req, res, next) => {
//   try {
//     let { id } = req.params;
//     let listing = await Listing.findById(id);
    
//     if (!listing) {
//       req.flash("error", "Listing not found");
//       return res.redirect("/listings");
//     }

//     if (!listing.owner || !req.user || !listing.owner.equals(req.user._id)) {
//       req.flash("error", "You aren't the Owner of the Listing, you don't have Access/Permission to Edit and Delete!");
//       return res.redirect(`/listings/${id}`);
//     }

//     next();
//   } catch (err) {
//     next(err); // Pass the error to the error handling middleware
//   }
// };

// module.exports.validateListing = (req, res, next) => {
//   let { error } = listingSchema.validate(req.body);
//   if (error) {
//     let errMsg = error.details.map((el) => el.message).join(",");
//     throw new ExpressError(400, errMsg);
//   } else {
//     next();
//   }
// };

// module.exports.validateReview = (req, res, next) => {
//   let { error } = reviewSchema.validate(req.body);
//   if (error) {
//     let errMsg = error.details.map((el) => el.message).join(",");
//     throw new ExpressError(400, errMsg);
//   } else {
//     next();
//   }
// };

// module.exports.isReviewAuthor = async (req, res, next) => {
//   let { id, reviewId } = req.params;
//   let review = await Review.findById(reviewId);
//   if (!review.author.equals(req.user._id)) {
//     req.flash("error", "You aren't the Author of the Review to Delete");
//     return res.redirect(`/listings/${id}`);
//   }
//   next();
// };


const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema, bookingSchema } = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to Create Listing!");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  try {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    
    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect("/listings");
    }

    if (!listing.owner || !req.user || !listing.owner.equals(req.user._id)) {
      req.flash("error", "You aren't the Owner of the Listing, you don't have Access/Permission to Edit and Delete!");
      return res.redirect(`/listings/${id}`);
    }

    next();
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
};

module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(req.user._id)) {
    req.flash("error", "You aren't the Author of the Review to Delete");
    return res.redirect(`/listings/${id}`);
  }
  next();
};


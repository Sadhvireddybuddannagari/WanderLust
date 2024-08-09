const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

// Storage
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
  .get(wrapAsync(listingController.index)) // Index
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing) // Create
  );

// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Filter Route
router.get("/category/:category", wrapAsync(listingController.filterByCategory));

router.route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
  );

// Render Booking Form Route
router.get("/:id/book", isLoggedIn, wrapAsync(listingController.renderBookingForm));

// Book Route
router.post("/:id/book", isLoggedIn, wrapAsync(listingController.bookListing));

// Edit Route
router.get("/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;

// const express = require("express");
// const router = express.Router();

// const wrapAsync = require("../utils/wrapAsync.js");
// const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

// const listingController = require("../controllers/listings.js");

// // Storage
// const multer = require('multer');
// const { storage } = require("../cloudConfig.js");
// const upload = multer({ storage });

// router.route("/")
//   .get(wrapAsync(listingController.index)) // Index
//   .post(
//     isLoggedIn,
//     upload.single('listing[image]'),
//     validateListing,
//     wrapAsync(listingController.createListing) // Create
//   );

// // New Route
// router.get("/new", isLoggedIn, listingController.renderNewForm);

// // Filter Route
// router.get("/category/:category", wrapAsync(listingController.filterByCategory));

// router.route("/:id")
//   .get(wrapAsync(listingController.showListing))
//   .put(
//     isLoggedIn,
//     isOwner,
//     upload.single('listing[image]'),
//     validateListing,
//     wrapAsync(listingController.updateListing)
//   )
//   .delete(
//     isLoggedIn,
//     isOwner,
//     wrapAsync(listingController.destroyListing)
//   );

// // Render Booking Form Route
// router.get("/:id/book", isLoggedIn, wrapAsync(listingController.renderBookingForm));

// // Book Route
// router.post("/:id/book", isLoggedIn, wrapAsync(listingController.bookListing));

// // Edit Route
// router.get("/:id/edit",
//   isLoggedIn,
//   isOwner,
//   wrapAsync(listingController.renderEditForm)
// );

// module.exports = router;

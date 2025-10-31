const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync.js');
const Listing = require('../models/listing');
const review = require('../models/review.js'); // lowercase 
const { validatereview, isLoggedIn , isReviewAuthor } = require('../middleware.js');
const reviewController = require('../Controllers/review.js');

// Review routes
// POST route for reviews
router.post('/', validatereview, isLoggedIn, wrapAsync(reviewController.Postreview));

// DELETE review route
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(reviewController.DeleteReview));

module.exports = router;

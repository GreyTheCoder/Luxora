const Listing = require('../models/listing');
const review = require('../models/review.js');

module.exports.Postreview = (async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    const newReview = new review(req.body.review); 
    newReview.author = req.user._id;

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash('success', 'New review created!');
    res.redirect(`/listings/${listing._id}`);
});


module.exports.DeleteReview = (async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await review.findByIdAndDelete(reviewId); 
    req.flash('success', 'Review deleted');
    res.redirect(`/listings/${id}`);
});
const Listing = require("../models/listing");

// INDEX
module.exports.index = async (req, res) => {
  const { category } = req.query;
  let allListings;

  if (category) {
    allListings = await Listing.find({ category });
  } else {
    allListings = await Listing.find({});
  }

  res.render("listings/index.ejs", { allListings, category });
};

// NEW FORM
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

// SHOW
module.exports.Showlisting = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Cannot find that listing!");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

// CREATE
module.exports.createListing = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new Listing({
    ...req.body.listing,
    owner: req.user._id,
    category: String(req.body.listing.category), // ensure string
    image: { url, filename },
  });

  await newListing.save();
  req.flash("success", "Successfully made a new listing!");
  res.redirect("/listings");
};

// EDIT
module.exports.EditListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Cannot find that listing!");
    return res.redirect("/listings");
  }

  let OriginalImageurl = listing.image.url;
  OriginalImageurl = OriginalImageurl.replace("/upload", "/upload/w_250");

  res.render("listings/edit.ejs", { listing, OriginalImageurl });
};

// UPDATE
module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findByIdAndUpdate(id, {
    ...req.body.listing,
    category: String(req.body.listing.category),
  });

  if (req.file) {
    const url = req.file.path;
    const filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing updated!");
  res.redirect(`/listings/${id}`);
};

// DELETE
module.exports.deleteListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Successfully deleted listing!");
  res.redirect("/listings");
};

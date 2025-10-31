const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to DB");
}

main().then(() => initDB()).catch((err) => console.log(err));

async function initDB() {
  // Delete old listings
  await Listing.deleteMany({});

  // Add owner and category as string
  const listingsToInsert = initData.data.map((obj) => ({
    ...obj,
    owner: "68d857181cdc1661547b5d79",
    category: "Trending",
  }));

  await Listing.insertMany(listingsToInsert);
  console.log("✅ Data was initialized successfully!");
  process.exit();
}

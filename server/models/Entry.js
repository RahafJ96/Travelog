const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  title: String,
  note: String,
  date: String,
  location: {
    lat: Number,
    lng: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Entry", entrySchema);

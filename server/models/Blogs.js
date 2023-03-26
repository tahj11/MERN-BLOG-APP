// models/Blogs.js

const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  currentDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Blog = mongoose.model("Blogs", BlogSchema);

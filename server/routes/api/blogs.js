//routes/api/blogs

const express = require("express");
const {
  addBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../../controllers/blog-controller");
const router = express.Router();

// Load Book model
const Blog = require("../../models/Blogs");

//@route GET api/blogs/test
//@description tests books route
//@access Public
router.get("/test", (req, res) => res.send("Blog route testing!"));

//@route GET api/books
//@description add/save book
//@access Public
router.post("/", addBlog);

//@route GET api/blogs
//@description get all blogs
//@access Public
router.get("/", getBlogs);

// @route GET api/blogs/:id
// @description Get single blog by id
// @access Public
router.get("/:id", getBlog);

// @route GET api/blogs/:id
// @description Update blogs
// @access Public
router.put("/:id", updateBlog);

// @route GET api/blogs/:id
// @description Delete blogs by id
// @access Public
router.delete("/:id", deleteBlog);

module.exports = router;

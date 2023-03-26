const Blog = require("../models/Blogs");

exports.addBlog = (req, res) => {
  Blog.create(req.body)
    .then((blog) => res.json({ msg: "Blog successfully added!" }))
    .catch((err) => res.status(400).json({ error: "Unable to add blog" }));
};

exports.getBlogs = (req, res) => {
  Blog.find()
    .then((blogs) => res.json(blogs))
    .catch((err) =>
      res.status(404).json({ noblogsfound: "No Blogs Found..." })
    );
};

exports.getBlog = (req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => res.json(blog))
    .catch((err) => res.status(404).json({ noblogfound: "No Blog found" }));
};

exports.updateBlog = (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body)
    .then((blog) => res.json({ msg: "Updated Successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
};

exports.deleteBlog = (req, res) => {
  Blog.findByIdAndDelete(req.params.id, req.body)
    .then((blog) => res.json({ msg: "Blog deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such blog exists" }));
};

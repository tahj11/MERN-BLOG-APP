import React, { useEffect, useState } from "react";
import "./showBlogs.css";
import axios from "axios";
import BlogCard from "../BlogCard/BlogCard";

function ShowBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4050/api/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log("Error from Show Blogs");
      });
  }, []);

  const blogList =
    blogs.length === 0
      ? "There is no blog currently available!"
      : blogs.map((blog, i) => <BlogCard blog={blog} key={i} />);
  return (
    <div>
      <div className="blogList">{blogList}</div>
    </div>
  );
}

export default ShowBlogs;

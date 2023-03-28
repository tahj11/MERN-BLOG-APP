import React, { useState } from "react";
import "./createBlog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    img: "",
    content: "",
  });

  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4050/api/blogs", blog)
      .then((res) => {
        setBlog({
          title: "",
          img: "",
          content: "",
        });

        //Push to
        navigate("/");
      })
      .catch((err) => {
        console.log("Error in Creating Blogs");
      });
  };
  return (
    <div className="create-blog">
      <h1>ADD BLOG SECTION</h1>
      <form noValidate onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title Of Blog"
            name="title"
            className="form-control"
            value={blog.title}
            onChange={onChange}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="text"
            placeholder="Image"
            name="img"
            className="form-control"
            value={blog.img}
            onChange={onChange}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="text"
            placeholder="Content"
            name="content"
            className="form-control"
            value={blog.content}
            onChange={onChange}
          />
        </div>
        <br />
        <input
          type="submit"
          className="btn btn-outline-warning btn-block mt-4"
        />
      </form>
    </div>
  );
}

export default CreateBlog;

import React from "react";
import "./blogCard.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";

function BlogCard(props) {
  const blog = props.blog;

  return (
    <div className="card-container">
      <div className="title">
        <h1>{blog.title}</h1>
      </div>
      <div className="img-container">
        <img src={blog.img} alt="" />
      </div>
      <div className="content">
        <p>{blog.content}</p>
      </div>
      <div className="icons">
        <FavoriteBorderIcon />
        <IosShareIcon />
        <AddCommentOutlinedIcon />
      </div>
    </div>
  );
}

export default BlogCard;

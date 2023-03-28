import React from "react";
import PropTypes from "prop-types";
import "./featuredPost.css";

function FeaturedPost(props) {
  const { posts } = props;
  return (
    <div className="featuredPostCard">
      <img src={posts.image} alt="" />
      <div className="featured-content">
        <h1>{posts.title}</h1>
      </div>
      <p className="featured-para">{posts.author}</p>
    </div>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;

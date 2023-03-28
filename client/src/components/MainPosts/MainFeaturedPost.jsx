import React from "react";
import PropTypes from "prop-types";

function MainFeaturedPost(props) {
  const { posts } = props;
  return (
    <div
      className="MainFeaturedPostCard"
      style={{
        backgroundImage: `url(${posts.backImage})`,
      }}
    ></div>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;

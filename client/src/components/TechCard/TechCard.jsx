import React from "react";
import "./techCard.css";
import PropTypes from "prop-types";

function TechCard(props) {
  const { posts } = props;
  return (
    <div className="techCard">
      <img src={posts.image} alt="" />
      <div className="tech-card-information">
        <span className="tech-card-title">{posts.title}</span>
        <span className="tech-card-heading">{posts.heading}</span>
        <div className="tech-card-para">
          <p>{posts.para}</p>
        </div>
        <span className="tech-card-author">{posts.author}</span>
      </div>
    </div>
  );
}

export default TechCard;

import React from "react";
import TechCard from "../../components/TechCard/TechCard";
import { FashionCardData } from "../../data";

function FashionHeader() {
  return (
    <div className="tech-header">
      <div className="left">
        <div className="tech-header-img">
          <img
            src="https://www.refinery29.com/images/8661724.jpg?format=webp&width=340&height=408&quality=85&crop=5%3A6"
            alt=""
          />
          <span className="tech-header-print">Best New Fashion</span>
          <h1>Olivia Anthony Thinks There</h1>
          <h1>Absolutely Should Be Crying In</h1>
          <h1>Fashion</h1>
        </div>
      </div>
      <div className="right">
        <div className="tech-card-layout">
          {FashionCardData.map((post) => (
            <TechCard key={post.title} posts={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FashionHeader;

import React from "react";
import TechCard from "../TechCard/TechCard";
import "./techHeader.css";
import { GadgetData, TechCardData } from "../../data";

function TechHeader() {
  return (
    <div className="tech-header">
      <div className="left">
        <div className="tech-header-img">
          <img
            src="https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg"
            alt=""
          />
          <span className="tech-header-print">Privacy & Security</span>
          <h1>The FBI Has Been Buying</h1>
          <h1>Bulk Internet Data from This</h1>
          <h1>Florida Company</h1>
        </div>
      </div>
      <div className="right">
        <div className="tech-card-layout">
          {TechCardData.map((post) => (
            <TechCard key={post.title} posts={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechHeader;

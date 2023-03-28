import React from "react";
import "./techHeader.css";

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
          {/* <div className="tech-header-info">
            <span>
              A data broker that previously sold data-pilfering tools to the
              U.S. military has
            </span>
            <span>
              received tens of thousands of dollars from the FBI for similar
              services.
            </span>
          </div> */}
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default TechHeader;

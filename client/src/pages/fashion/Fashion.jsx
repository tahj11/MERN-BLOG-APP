import React from "react";
import FashionHeader from "../../components/FashionHeader/FashionHeader";
import "./fashion.css";

function Fashion() {
  return (
    <div className="fashion-page">
      <div className="fashion-title">
        <hr className="left_line" />
        <h1>Fashion</h1>
        <hr className="right_line" />
      </div>
      <span>One of the hottest topics in 2022. Learn more about</span>
      <FashionHeader />
    </div>
  );
}

export default Fashion;

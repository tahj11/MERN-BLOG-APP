import React from "react";
import FeaturedPost from "../../components/featuredPosts/FeaturedPost";
import "./tech.css";
import MainFeaturedPost from "../../components/MainPosts/MainFeaturedPost";
import { TechMain, TechData } from "../../data";

function Tech() {
  return (
    <div className="tech-page">
      <div className="tech-title">
        <hr className="left_line" />
        <h1>Artificial Intelligence</h1>
        <hr className="right_line" />
      </div>
      <span>One of the hottest topics in 2022. Learn more about</span>
      <span>ChatGPT, Bard, Midjourney, Dall-E and more.</span>
      <div className="tech">
        <MainFeaturedPost posts={TechMain} />
        <div className="tech-grid">
          {TechData.map((post) => (
            <FeaturedPost key={post.title} posts={post} />
          ))}
        </div>
      </div>
      <div className="tech-title">
        <hr className="left_line" />
        <h1>Tech</h1>
        <hr className="right_line" />
      </div>
      <span>Tech news, analysis, culture, business, security, and more</span>
    </div>
  );
}

export default Tech;

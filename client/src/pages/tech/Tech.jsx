import React from "react";
import FeaturedPost from "../../components/featuredPosts/FeaturedPost";
import "./tech.css";
import MainFeaturedPost from "../../components/MainPosts/MainFeaturedPost";
import { TechMain, TechData, GadgetData } from "../../data";
import TechHeader from "../../components/TechHeader/TechHeader";

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
      <TechHeader />
      <div className="tech-title">
        <hr className="left_line" />
        <h1>Gadgets</h1>
        <hr className="right_line" />
      </div>
      <span>Hacks to use in 2023</span>
      <div className="tech-grid">
        {GadgetData.map((post) => (
          <FeaturedPost key={post.title} posts={post} />
        ))}
      </div>
    </div>
  );
}

export default Tech;

import React from "react";
import "./discover.css";
import "../page-global.css";

function Discover() {
  return (
    <div className="discover-page">
      <div className="discover-title-group">
        <h2 className="title">Discover</h2>
        <div className="arrow-group">
          <button className="arrow">Left</button>
          <button className="arrow">Right</button>
        </div>
      </div>
      <ul className="category">
        <li>Popular</li>
        <li>Featured</li>
        <li>Most Visited</li>
        <li>Europe</li>
        <li>Asia</li>
      </ul>
      <div className="discover-img-group">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Discover;

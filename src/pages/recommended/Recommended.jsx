import React from "react";
import "./recommended.css";
import montanaImg from "../../assets/discovers/montana.jpg";

function Recommended() {
  return (
    <div className="recom-page">
      <h2 className="title">Recommended</h2>
      <div className="recom-img-group">
        <div className="recom-img-card">
          <img className="recom-img" src={montanaImg} alt="" />
          <p>Greenough, Montana</p>
        </div>
        <div className="recom-img-card">
          <img className="recom-img" src={montanaImg} alt="" />
          <p>Greenough, Montana</p>
        </div>
        <div className="recom-img-card">
          <img className="recom-img" src={montanaImg} alt="" />
          <p>Greenough, Montana</p>
        </div>
        <div className="recom-img-card">
          <img className="recom-img" src={montanaImg} alt="" />
          <p>Greenough, Montana</p>
        </div>
      </div>
    </div>
  );
}

export default Recommended;

import React from "react";
import "./discover.css";
import "../page-global.css";

// pages-element
import arrowLeft from "../../assets/pages-element/arrow-left.svg";
import arrowRight from "../../assets/pages-element/arrow-right.svg";

// img-card import
import racekHouse from "../../assets/discovers/racek-house.jpg";
import fujiMountain from "../../assets/discovers/fuji-mountain.jpg";
import nothernMountain from "../../assets/discovers/nothern-mountain.jpg";

function Discover() {
  return (
    <div className="discover-page">
      <div className="discover-title-group">
        <h2 className="title">Discover</h2>
        <div className="arrow-group">
          <div className="arrow">
            <img src={arrowLeft} alt="" />
          </div>
          <div className="arrow">
            <img src={arrowRight} alt="" />
          </div>
        </div>
      </div>
      <div className="category">
        <a className="category-link" href="">
          Popular
        </a>
        <a className="category-link" href="">
          Featured
        </a>
        <a className="category-link" href="">
          Most Visited
        </a>
        <a className="category-link" href="">
          Europe
        </a>
        <a className="category-link" href="">
          Asia
        </a>
      </div>
      <div className="discover-img-group">
        <div className="img-card">
          <img className="img" src={nothernMountain} alt="" />
          <p>Northern Mountain</p>
        </div>
        <div className="img-card">
          <img className="img" src={fujiMountain} alt="" />
          <p>Mount Fuji</p>
        </div>
        <div className="img-card">
          <img className="img" src={racekHouse} alt="" />
          <p>Racek’s House</p>
        </div>
      </div>
    </div>
  );
}

export default Discover;

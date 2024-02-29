import React from "react";
import { Link } from "react-router-dom";
import mountainFrame from "../../assets/pages-element/Frame 25.png";
import Discover from "../discover/Discover";
import Recommended from "../recommended/Recommended";
import { FaLongArrowAltRight } from "react-icons/fa";
import "../page-global.css";
import "./home-page.css";

function HomePage() {
  return (
    <div className="page-wrapper">
      <div className="home-page">
        <div className="title-part">
          <div className="title-part__text">
            <h1>Winter Vacation Trips</h1>
            <p>
              Enjoy your winter vacations with warmth and amazing sightseeing on
              the mountains. Enjoy the best experience with us!
            </p>
            <Link to="#discover" className="link-style">
              <button className="title-part__button-wrapper">
                Choose a tour
                <FaLongArrowAltRight className="arrow-right" />
              </button>
            </Link>
          </div>
          <img className="title-part__img" src={mountainFrame} alt="" />
        </div>
      </div>
      <Discover id="discover"></Discover>
      <Recommended></Recommended>
    </div>
  );
}

export default HomePage;

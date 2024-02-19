import React from "react";
import mountainFrame from "../../assets/Frame 25.png";
import "../page-global.css";
import "./home-page.css";
import Discover from "../discover/Discover";

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
            <button className="title-part__button-wrapper">
              Let's GO!
              <>arrow</>
            </button>
          </div>
          <img className="title-part__img" src={mountainFrame} alt="" />
        </div>
      </div>
      <Discover></Discover>
    </div>
  );
}

export default HomePage;

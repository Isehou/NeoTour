import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilterTour } from "../../store/slices/filterTourSlice";
import "./discover.css";
import "../page-global.css";

// pages-element
import arrowLeft from "../../assets/pages-element/arrow-left.svg";
import arrowRight from "../../assets/pages-element/arrow-right.svg";

function Discover({ id }) {
  const [filter, setFilter] = useState("europe");
  const tours = useSelector((state) => state.tours.list);
  const dispatch = useDispatch();

  const regions = [
    ["europe", "Europe"],
    ["asia", "Asia"],
    ["north_america", "North America"],
    ["south_america", "South America"],
    ["africa", "Africa"],
    ["australia", "Australia"],
    ["antarctica", "Antarctica"],
  ];

  const applyFilter = (newFilter) => {
    setFilter(newFilter);
    dispatch(fetchFilterTour(newFilter));
  };

  useEffect(() => {
    dispatch(fetchFilterTour(filter));
  }, []);

  return (
    <div className="discover-page" id={id}>
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
        {regions.map(([key, value]) => (
          <button
            className={
              filter === key ? "category-link active" : "category-link"
            }
            onClick={() => applyFilter(key)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="discover-list__wrapper">
        {tours.map((elem) => (
          <Link to={`/tour-view/${elem.id}`} key={elem.id}>
            <div className="discover-img-group">
              <div className="img-card">
                <img className="img" src={elem.thumbnail} alt="" />
                <p>{elem.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Discover;

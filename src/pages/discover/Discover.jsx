import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./discover.css";
import "../page-global.css";

// pages-element
import arrowLeft from "../../assets/pages-element/arrow-left.svg";
import arrowRight from "../../assets/pages-element/arrow-right.svg";

import {
  fetchListTour,
  toursByRegionSelector,
  regionsSelector,
  applyFilter,
} from "../../store/slices/listTourSlice";

function Discover({ id }) {
  const tours = useSelector(toursByRegionSelector);
  const regions = useSelector(regionsSelector);
  const currentFilter = useSelector((state) => state.tours.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListTour());
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

      <div>
        <div className="category">
          {regions.map((elem) => (
            <button
              className={
                currentFilter === elem
                  ? "category-link active"
                  : "category-link"
              }
              onClick={() => dispatch(applyFilter(elem))}
            >
              {elem}
            </button>
          ))}
        </div>
        {tours.map((elem) => (
          <div className="discover-img-group" key={elem.id}>
            <Link to="/tour-view" elem={elem}>
              <div className="img-card">
                <img className="img" src={elem.thumbnail} alt="" />
                <p>{elem.location}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;
{
  /* <Link to="/tour-view">
          <div className="img-card">
            <img className="img" src={racekHouse} alt="" />
            <p>Racek’s House</p>
          </div>
        </Link> */
}

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllToursForRecommendations } from "../../store/slices/listTourSlice";
import montanaImg from "../../assets/discovers/montana.jpg";
import "./recommended.css";

function Recommended() {
  const tours = useSelector((state) => state.tours.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllToursForRecommendations());
  }, [tours]);
  console.log("data", tours);

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

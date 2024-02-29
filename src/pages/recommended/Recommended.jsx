import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTours } from "../../store/slices/allToursSlice";
import "./recommended.css";

function Recommended() {
  const allTours = useSelector((state) => state.allTours.allListTours);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTours());
  }, []);

  return (
    <div className="recom-page">
      <h2 className="title">Recommended</h2>
      <div className="recom-img-group">
        {allTours.map((item) => (
          <Link to={`/tour-view/${item.id}`} key={item.id}>
            <div className="recom-img-card">
              <img className="recom-img" src={item.thumbnail} alt="" />
              <p>{item.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Recommended;

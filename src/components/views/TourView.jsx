import React, { useState } from "react";
import Validation from "../popup/Validation";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useTour } from "../../hooks/useTour";

import "./tour-view.css";
import "../loader-window.css";

function TourView() {
  const [validationActive, setValidationActive] = useState(false);
  const { id } = useParams();
  const { data, loading } = useTour(id);

  const navigate = useNavigate();
  console.log("data:", data);

  return (
    <div className="tour-view">
      {loading && <div className="loader"></div>}
      {!loading && data && (
        <div className="tour-view__wrapper">
          <div className="tour-view__head-block">
            <img src={data.thumbnail} alt="" />
            <button
              className="tour-view__head-btn"
              onClick={() => navigate(-1)}
            >
              <FaLongArrowAltLeft className="arrow-left" />
              Go back
            </button>
          </div>
          <div className="tour-view__description-block">
            <h1 className="tour-view__description-block__title">{data.name}</h1>
            <div className="tour-view__description-block__location">
              <pre>
                <FaLocationDot className="tour-view__icon" />
                <span>{data.location}</span>
              </pre>
            </div>
            <div className="tour-view__description-block__text">
              <div className="text-desc">
                <h4>Description</h4>
                <p>{data.description}</p>
              </div>
              <div className="text-review">
                <h4>Reviews</h4>
                <div className="review">
                  <span className="text-review__portrait">
                    <MdAccountCircle className="tour-view__icon" />
                    {data.reviewer_name}
                  </span>
                  <p className="text-review-desc">{data.review_text}</p>
                </div>
              </div>
            </div>
            <div>
              <button
                className="book-btn"
                onClick={() => setValidationActive(true)}
              >
                Book now
              </button>
              <Validation
                validationActive={validationActive}
                setValidationActive={setValidationActive}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TourView;

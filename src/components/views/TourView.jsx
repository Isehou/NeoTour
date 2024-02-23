import React, { useState } from "react";
import Validation from "../popup/Validation";
import fuji from "../../assets/discovers/fuji-mountain.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./tour-view.css";

function TourView() {
  const [validationActive, setValidationActive] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="tour-view">
      <div className="tour-view__wrapper">
        <div className="tour-view__head-block">
          <img src={fuji} alt="" />
          <button className="tour-view__head-btn" onClick={() => navigate(-1)}>
            <FaLongArrowAltLeft className="arrow-left" />
            Go back
          </button>
        </div>
        <div className="tour-view__description-block">
          <h1 className="tour-view__description-block__title">Mount Fuji</h1>
          <div className="tour-view__description-block__location">
            <pre>
              <FaLocationDot className="tour-view__icon" />
              <span>Honshu, </span>
              <span>Japan</span>
            </pre>
          </div>
          <div className="tour-view__description-block__text">
            <div className="text-desc">
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dignissim eget amet viverra eget fames rhoncus. Eget enim
                venenatis enim porta egestas malesuada et. Consequat mauris
                lacus euismod montes.
              </p>
            </div>
            <div className="text-review">
              <h4>Reviews</h4>
              <div className="review">
                <span className="text-review__portrait">
                  <MdAccountCircle className="tour-view__icon" />
                  Anonymous
                </span>
                <p className="text-review-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, magnam?
                </p>
              </div>
              <div className="review">
                <span className="text-review__portrait">
                  <MdAccountCircle className="tour-view__icon" />
                  Anonymous
                </span>
                <p className="text-review-desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit natus similique, quisquam est voluptatem
                  mollitia recusandae accusantium asperiores vitae iste.
                </p>
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
    </div>
  );
}

export default TourView;

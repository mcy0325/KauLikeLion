import React from "react";
import "./MainBanner.css";
import { useNavigate } from "react-router-dom";

function MainBanner() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/certificate");
  };

  return (
    <div className="main-banner">
      <div className="banner-title">Growl To World!</div>
      <div className="banner-subtitle">한국항공대학교 멋쟁이사자처럼</div>
      <div className="search-flights">
        <div className="radio-group">
          <label>
            <input type="radio" name="trip-type" value="return" disabled />
            Return
          </label>
          <label>
            <input
              type="radio"
              name="trip-type"
              value="oneway"
              defaultChecked
              disabled
            />
            One-way
          </label>
        </div>
        <div className="input-group">
          <div className="input-field">
            <div className="field-label">Departure</div>
            <input type="text" value="Korea Aerospace University" readOnly />
          </div>
          <div className="input-field">
            <div className="field-label">Arrival</div>
            <input type="text" value="LIKELION 13TH" readOnly />
          </div>
          <div className="input-field">
            <div className="field-label">Date</div>
            <input type="date" value="2024-03-13" readOnly />
          </div>
          <button className="search-button" onClick={handleSearchClick}>
            SEARCH FLIGHTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;

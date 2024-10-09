import React from "react";
import "./TopHome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

function TopHome() {
  return (
    <div className="top-home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="top-home-content">
              <h5 className="top-home-content-sub-title">movflx</h5>
              <h1 className="top-home-content-title">
                unlimited <span>movie</span>, tVs <br /> shows, & more.
              </h1>
              <ul className="top-home-list">
                <li>PG 18</li>
                <li>HD</li>
                <li>Romance, Drama</li>
                <li>
                  <FontAwesomeIcon icon={faCalendar} /> 2021
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} /> 2021
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHome;

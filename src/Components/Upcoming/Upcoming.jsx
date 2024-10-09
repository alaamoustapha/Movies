import React from "react";
import TopTitle from "../TopTitle/TopTitle";
import "./Upcoming.css";
import MoviesItems from "../MoviesItems/MoviesItems";

function Upcoming({ movies }) {
  return (
    <div className="upcoming">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <TopTitle sub="ONLINE STREAMING" title="Upcoming Movies" />
          </div>
        </div>
        <div className="row">
          <MoviesItems movies={movies} />
        </div>
      </div>
    </div>
  );
}

export default Upcoming;

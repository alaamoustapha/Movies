import React, { Fragment } from "react";
import "./MoviesItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function MoviesItems({ movies }) {
  //   const fiterItems = movies.slice(6);
  return (
    <Fragment>
      {movies.map((movie) => {
        return (
          <div className="col-lg-3 col-md-6 col-sm-12" key={movie.imdbID}>
            <div className="movie-item-img">
              <div className="movie-item-layer">
                <img src={movie.Poster} alt={movie.Title} />
                <a href="/#" className="movie-item-layer-heart">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="movie-item-layer-heart-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export default MoviesItems;

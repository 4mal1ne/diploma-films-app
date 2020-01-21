import React from "react";

const Movie = (props) => {
  return (
    <div className="card-block">
        <div className="film-image">
            {
                  props.image == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/update/static/default-image.jpg`} alt="card-film"/> : <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="card-film"/>
            }
        </div>
        <div className="card-content">
            <p>
                <a className="learn-more-link" href="#" onClick={() => props.viewMovieInfo(props.movieId)}>Learn more</a>
            </p>
        </div>
    </div>
  );
};

export default Movie;
import React from "react";

const MovieInfo = (props) => {
    return (
        <div className="container">
            <div className="movie-info-block">
                <div className="image-block-info">
                    <img src={`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}/>
                </div>
                <div className="info-container">
                    <h1>{props.currentMovie.title}</h1>
                    <h3>{props.currentMovie.release_date}</h3>
                    <p>{props.currentMovie.overview}</p>
                    <span className="go-back-link" onClick={props.closeMovieInfo}>Go back</span>
                </div>
            </div>
        </div>
    )
};

export  default  MovieInfo;
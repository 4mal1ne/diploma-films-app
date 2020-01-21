import React from "react";

const MovieInfo = (props) => {
    return (
        <div className="container">
                <span className="go-back-link" onClick={props.closeMovieInfo}>Go back</span>

            <div className="movie-info-block">
                <div className="image-block-info">
                {
                    props.currentMovie.poster_path === null ?
                        <img src={"../image/not-found.png"}
                            alt="card-film"/> :
                        <img src={`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
                            alt="card-film"/>
                }
                </div>
                <div className="info-container">
                    <h1>{props.currentMovie.title}</h1>
                    <h3>{props.currentMovie.release_date}</h3>
                    <p>{props.currentMovie.overview}</p>
                </div>
            </div>
        </div>
    )
};

export  default  MovieInfo;
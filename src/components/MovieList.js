import React from "react";
import Movie from "./Movie";

const MovieList  = (props) => {
    return (
        <div className="films-contain">
             {
                 props.movies.map((movie, i) => {
                     return (
                         <Movie key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path} />
                     );
                 })
             }
        </div>
    );
};

export default MovieList;
import React from "react";
import { NavLink } from "react-router-dom";
import "./Movie.css";

function shortenOverview(Props) {
    Props.movies.map((movie, id) => {
        let txt = movie.Overview;
        if (txt.length > 100) {
            Props.movies[id].Overview = txt.substr(0, 100) + "...";
        }
    })
}

export default function Movie(props) {

    let tmpProps = props;

    shortenOverview(tmpProps);

    console.log(props.movies);

    return (
        <>
            {props.movies.map((movie) => (
            <div id="movies-main">
                <div id="main-inside">
                    <div id="inside-movie">
                        <div id="inside-left">
                            <div className="left-poster">
                                <img src={movie.Poster_Link}
                                    alt="" />
                                <div className="left-rating">
                                    <p>{movie.IMDB_Rating}</p>
                                </div>
                            </div>
                        </div>
                        <div id="inside-right">
                            <a href={`http://localhost:3000/movies/${movie.id}`}>{movie.Series_Title}</a>
                            <div className="right-parts">
                                <div className="parts-genre">
                                    <p>
                                        Genre: {movie.Genre}
                                    </p>
                                </div>
                                <div className="parts-runtime">
                                    <p>
                                        Runtime: {movie.Runtime}
                                    </p>
                                </div>
                            </div>
                            <span>
                                {movie.Overview} <a id="read-more" href={`http://localhost:3000/movies/${movie.id}`}><u>read more</u></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </>
    );
}
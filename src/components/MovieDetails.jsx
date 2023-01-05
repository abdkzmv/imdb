import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import "./MovieDetails.css";

export default function MovieDetails() {

    const [movie, setMovie] = useState(null);
    const { movieInd } = useParams();

    useEffect(() => {
        let url =  `http://localhost:3004/movies/${movieInd}`;
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setMovie(data);
        });
    }, []);
    
    return (
        movie ? (
                        <>
                        <div class="specific-main">

            <div class="container-specific">

                <div class="specific-top">
                    <div class="top-left">
                        <h1>{movie.Series_Title}</h1>

                        <div class="top-left-bottom">
                            <p class="release-p">Released: {movie.Released_Year}</p>
                            <p class="certificate-p">Certificate: {movie.Certificate}</p>
                            <p class="runtime-p">Runtime: {movie.Runtime}</p>
                            
                        </div>
                    </div>

                    <div class="top-right">
                        <p class="rating-p">
                            IMDB Rating: <br/> {movie.IMDB_Rating}
                        </p>

                        <p class="metascore-p">
                            Metascore: <br/> {movie.Meta_score}
                        </p>

                        <p class="votes-p">
                            Number of Votes: <br/> {movie.No_of_Votes}
                        </p>

                        <p class="gross-p">
                                    Gross: <br /> {movie.Gross}
                        </p>
                    </div>
                </div>


                <div class="specific-center">
                    <div class="center-left">
                        <img src={movie.Poster_Link}
                        alt="" />
                    </div>
                    <div class="center-right">
                        <div class="center-right-top">
                            <p class="genre-p">
                                Genre: {movie.Genre}
                            </p>
                            <p class="director-p">
                                Director: {movie.Director}
                            </p>
                        </div>
                        <div class="center-right-center">
                            <span class="overview-big">Overview: </span>
                            <span> {movie.Overview}
                            </span>
                        </div>
                        <div class="center-right-bottom">
                            <div class="stars-head">
                                <p class="stars-p">Stars:</p>
                            </div>
                            <div class="stars">
                                <div class="star"> <p>{movie.Star1}
                                </p></div>
                                <div class="star"> <p>{movie.Star2}
                                </p></div>
                                <div class="star"> <p>{movie.Star3}
                                </p></div>
                                <div class="star"> <p>{movie.Star4}
                                </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </>) : (<h2 id="loading-heading">Loading...</h2>)
    );
}   
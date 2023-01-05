import React from "react";
import { useEffect, useState } from 'react';
import Movie from "./Movie";
import "./Movies.css";

export default function Movies() {

    const [pageId, setPageId] = useState(1);
    const [movies, setMovies] = useState(null);
    
    function toTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function previousPage() {
        toTop();
        if (pageId > 1) {
            setPageId(pageId - 1);
        }
    }

    function nextPage() {
        toTop();
        if (pageId < 100) {
            setPageId(pageId + 1);
        }
    }

    useEffect(() => {
        const jsonURL = `http://localhost:3004/movies?_page=${pageId}`;
        fetch(jsonURL)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data);
        });
    }, [previousPage, nextPage]);

    return (
        movies ? (
            <>
                <h2>Page {pageId}</h2>
                <Movie movies={movies} />
                <nav>
                    <ul className="pagination">
                        <li className="page-item">
                            <button id = "prev" className="page-link" aria-label="Previous" onClick={previousPage}>
                                <span aria-hidden="true">⬅️</span>
                                <span className="sr-only"> Back</span>
                            </button>
                        </li>
                        <li>
                            <button id="next" className="page-link" aria-label="Next" onClick={nextPage}>
                                <span className="sr-only">Next </span>
                                <span aria-hidden="true">➡️</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </>) : (<h2 id="loading-heading">Loading...</h2>)
    );
}
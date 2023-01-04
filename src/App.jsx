import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Movies from './components/Movies';
import Navbar from "./components/Navbar";
import './App.css';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <>
      <Navbar />
      <main>
            <Routes>
                <Route path="/" element=<Home /> />
                <Route path="/movies" element=<Movies /> />
                <Route path="/movies?page=:pageNum" element=<Movies /> />
                <Route path="/movies/:movieId" element=<MovieDetails /> />
                <Route path="/contact" element=<Contact /> />
                <Route path="/*" element=<NotFound /> />
            </Routes>
        </main>
    </>
  );
}

export default App;

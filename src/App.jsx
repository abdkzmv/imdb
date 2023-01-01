import React from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
export default function App() {
    return (
      <>
        <Navbar />
        <main>
            <Routes>
                <Route path="/" element=<Home /> />
                <Route path="/movies" element=<Movies /> />
                <Route path="/contact" element=<Contact /> />
                <Route path="/*" element=<NotFound /> />
            </Routes>
        </main>
      </>
    );
}
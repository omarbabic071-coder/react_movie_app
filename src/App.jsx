import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import HeroSection from "./components/HeroSection";
import MoviesContainer from "./components/MoviesContainer";
// import { useState } from "react";
import { useEffect, useState } from "react";
import fetchData from "./api";

function App() {
  let [title, setTitle] = useState("");

  useEffect(() => {}, [title]);
  return (
    <>
      <Header setTitle={setTitle} title={title} fetchData={fetchData} />
      <HeroSection />
      <MoviesContainer>
        <MovieCard src="https://placehold.co/200x356" />
      </MoviesContainer>
    </>
  );
}

export default App;

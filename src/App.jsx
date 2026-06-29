import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import HeroSection from "./components/HeroSection";
import MoviesContainer from "./components/MoviesContainer";
// import { useState } from "react";
import { useEffect, useState } from "react";
import fetchData from "./api";

function App() {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, [title]);

  return (
    <>
      <Header
        setTitle={setTitle}
        title={title}
        fetchData={fetchData}
        setMovies={setMovies}
      />
      <HeroSection />
      <MoviesContainer>
        {movies.map((movie, i) => {
          return (
            <MovieCard
              key={i}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              title={movie.title}
              rating={movie.vote_average}
            />
          );
        })}
      </MoviesContainer>
    </>
  );
}

export default App;

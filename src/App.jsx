import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import HeroSection from "./components/HeroSection";
import MoviesContainer from "./components/MoviesContainer";
// import { useState } from "react";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  return (
    <>
      <Header setTitle={setTitle} title={title} setMovies={setMovies} />
      <div className="flex justify-center items-center">
        <HeroSection />
      </div>
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

import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import HeroSection from "./components/HeroSection";
import MoviesContainer from "./components/MoviesContainer";
import MovieDetails from "./components/MovieDetails";
// import { useState } from "react";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState("");
  let [movies, setMovies] = useState([]);
  let [showDetails, setShowDetails] = useState(false);
  let [idx, setIdx] = useState(null);

  const displayMovieDetails = (index) => {
    console.log("clicked movie");
    setShowDetails((d) => !d);
    console.log(showDetails);
    console.log(idx);
    setIdx(index);
  };

  return (
    <>
      <Header setTitle={setTitle} title={title} setMovies={setMovies} />
      <div className="flex justify-center items-center">
        <HeroSection />
      </div>

      {showDetails ? (
        <MovieDetails movie={movies[`${idx}`]} />
      ) : (
        <MoviesContainer>
          {movies.map((movie, i) => {
            return (
              <MovieCard
                key={i}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                title={movie.title}
                rating={movie.vote_average}
                func={() => displayMovieDetails(i)}
              />
            );
          })}
        </MoviesContainer>
      )}
    </>
  );
}

export default App;

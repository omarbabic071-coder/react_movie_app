import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api";

function HeroSection() {
  let [trendingMovies, setTrendingMovies] = useState([]);
  let [idx, setIdx] = useState(0);

  useEffect(() => {
    getTrendingMovies().then((data) => {
      setTrendingMovies(data?.results);
    });
  }, []);
  if (!trendingMovies.length) return null;

  const setMovieIndex = (index) => {
    setIdx(index);
  };

  const backdropUrl = `https://image.tmdb.org/t/p/w500/${trendingMovies[idx].backdrop_path}`;

  return (
    <section className="flex justify-center items-center w-[80%] bg-black/80 rounded-2xl mt-20 ">
      <img
        src={backdropUrl}
        alt={trendingMovies[idx].title}
        className="rounded-2xl h-150 w-auto object-cover shrink-0 m-0"
      />
      <div className="flex flex-col items-center p-5 flex-1 ">
        <p className="font-bold text-4xl text-center">
          {trendingMovies[idx].title}
        </p>
        <p className="mt-5">{trendingMovies[idx].overview}</p>
      </div>

      <div className="flex flex-col items-center gap-5 max-h-150 overflow-y-auto pr-2 shrink-0 scrollbar-gutter-auto ">
        {trendingMovies.map((movie, i) => {
          const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
          return (
            <button onClick={() => setMovieIndex(i)}>
              <img
                key={i}
                src={posterUrl}
                alt={movie.title}
                className="rounded-xl w-27.5 h-auto object-cover"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default HeroSection;

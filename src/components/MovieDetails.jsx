function MovieDetails({ movie = [], actors = {} }) {
  const backdropUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;

  return (
    <section className="z-50 w-[80%] flex flex-col items-center bg-gray-900  absolute h-dvh ml-auto top-0 self-center overflow-y-scroll">
      <div className="flex justify-center items-center ">
        <img src={backdropUrl} className=" w-[80%]" />
        <div className="flex flex-col items-center">
          <p className="font-bold font-sans text-4xl my-auto">{movie.title}</p>
          <p>Release date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>{movie.overview}</p>
          <p>{movie.media_type}</p>
        </div>
      </div>
      <div>{actors}</div>
    </section>
  );
}

export default MovieDetails;

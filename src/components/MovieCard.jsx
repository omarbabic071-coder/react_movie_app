function MovieCard({
  src = "https://placehold.co/600x400",
  title = "fdsdfsdsfa",
  rating = 0,
  func = null,
}) {
  return (
    <button
      onClick={func}
      className="flex flex-col items-center w-full max-w-60 bg-black/50 p-0 pb-3 rounded-2xl "
    >
      <img
        src={src}
        alt={title}
        className="rounded-t-2xl object-cover aspect-2/3"
        id="movie-poster"
      />
      <p className="font-bold font-sans my-2 text-xl text-center ">{title}</p>
      <p className="text-gray-500 my-0.5">{Number(rating).toFixed(1)}</p>
    </button>
  );
}

export default MovieCard;

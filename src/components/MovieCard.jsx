function MovieCard({
  src = "https://placehold.co/600x400",
  title = "fdsdfsdsfa",
  rating,
}) {
  return (
    <div className="flex flex-col items-center w-full max-w-60 bg-black/50 p-0 pb-3 rounded-2xl ">
      <img
        src={src}
        alt={title}
        className="rounded-t-2xl w-full object-cover aspect-2/3"
        id="movie-poster"
      />
      <p className="font-bold font-sans my-2 text-xl">{title}</p>
      <p className="text-gray-500 my-0.5">{rating}</p>
    </div>
  );
}

export default MovieCard;

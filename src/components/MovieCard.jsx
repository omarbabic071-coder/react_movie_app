function MovieCard({
  src = "https://placehold.co/600x400",
  title = "fdsdfsdsfa",
  keywords = "sadasd,adsdas,adsdas,adsdas",
}) {
  return (
    <div className="flex flex-col items-center w-fit h-fit">
      <img src={src} alt={title} />
      <p>{title}</p>
      <p>{keywords}</p>
    </div>
  );
}

export default MovieCard;

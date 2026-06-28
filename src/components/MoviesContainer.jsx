function MoviesContainer({ children }) {
  return (
    <div className="flex justify-evenly items-center flex-wrap flex-row my-10">
      {children}
    </div>
  );
}

export default MoviesContainer;

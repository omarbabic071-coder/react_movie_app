function MoviesContainer({ children }) {
  return (
    <div className="mt-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 @max-xs:w-80 ">
      {children}
    </div>
  );
}

export default MoviesContainer;

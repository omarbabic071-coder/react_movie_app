import { useState } from "react";
import { searchMovies } from "../api";

function Header({ setTitle, setMovies }) {
  const [enteredTitle, setEnteredTitle] = useState("fight");

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const getMovies = () => {
    setTitle(enteredTitle);
    searchMovies(enteredTitle).then((data) => {
      setMovies(data?.results || []);
    });
  };

  return (
    <header className="flex justify-evenly items-center fixed w-dvw m-0 top-0 h-fit min-h-15 bg-black/50">
      <p className="font-bold text-xl font-sans">Movie App</p>
      <input
        className="px-2 py-1 border-white border rounded"
        placeholder="Enter a movie name..."
        onChange={handleTitleChange}
        value={enteredTitle}
      />
      <button
        className="rounded border border-white px-2 py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 ease-in-out"
        onClick={getMovies}
      >
        Search
      </button>
    </header>
  );
}

export default Header;

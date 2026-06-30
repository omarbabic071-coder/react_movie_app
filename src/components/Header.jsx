import { useState } from "react";
import { searchMovies } from "../api";
import searchIcon from "../assets/search.svg";

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
    <nav className="flex justify-center items-center fixed w-dvw m-0 top-0 h-fit min-h-15 bg-black/50">
      <p className="font-bold text-xl font-sans ml-5">Movie App</p>
      <div className="flex justify-center items-center gap-1 mx-auto">
        <input
          className="px-2 py-1 border-white border rounded "
          placeholder="Enter a movie name..."
          onChange={handleTitleChange}
          value={enteredTitle}
        />
        <button
          className="rounded border border-white px-2 py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 ease-in-out"
          onClick={getMovies}
          aria-label="Search"
        >
          <img src={searchIcon} alt="Search" className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}

export default Header;

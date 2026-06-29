import { useState } from "react";

function Header({ setTitle, fetchData, title }) {
  let [enteredTitle, setEnteredTitle] = useState("mom");

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const searchMovie = () => {
    setTitle(enteredTitle);
    fetchData(title).then((data) => {
      console.log(data);
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
        onClick={searchMovie}
      >
        Search
      </button>
    </header>
  );
}

export default Header;

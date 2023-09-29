import React, { useRef } from "react"; // useRef hook is a built-in hook that allows you to create a mutable reference to a DOM element or to persist a mutable value across renders without causing re-renders when the reference changes.
import { useNavigate } from "react-router-dom";
import { createSearchParams } from "react-router-dom";
// Import createSearchParams
// Import useNavigate

const Search = () => {
  // get navigate function
  const navigate = useNavigate(); // used to programmatically navigate to different routes

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = {
      name: searchInputRef.current.value,
    };

    // use createSearchParams
    const query = createSearchParams(searchQuery);
    navigate({
      pathname: "/search",
      search: `?${query}`,
    });

    // imperatively redirect with useNavigate() returned function
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setQuery }) => {
  const handleOnchange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search For a Country . . ."
        onChange={handleOnchange}
      />
      <span>
        <FaSearch />
      </span>
    </>
  );
};

export default SearchBar;

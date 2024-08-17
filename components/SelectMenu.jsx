import React from "react";

const SelectMenu = ({ setQuery }) => {
  return (
    <select
      className="Filter-by-region"
      onChange={(e) => {
        setQuery(e.target.value.toLowerCase());
      }}
    >
      <option hidden>Filter By Region</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="africa">Africa</option>
      <option value="oceania">Oceania</option>
      <option value="antarctica">Antarctica</option>
      <option value="europe">Europe</option>
    </select>
  );
};

export default SelectMenu;

import React from "react";
import "./searchbar.style.css";

export default function SearchBar({ placeholder, handleChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

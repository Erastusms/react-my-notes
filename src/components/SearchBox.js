import React from "react";
export default function SearchBox({ value, onChange }) {

  return (
    <input
      type="search"
      className="search-input"
      placeholder="Search..."
      onChange={onChange}
      value={value}
    />
  );
}

import React from "react";
import "./Search.css";

const Search = () => {
  return (
    //   TODO: center search input
    <div className="create-form">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search Employee"
          aria-label="Search Employee"
        ></input>
      </div>
    </div>
  );
};

export default Search;
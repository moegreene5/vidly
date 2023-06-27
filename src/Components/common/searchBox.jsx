import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <input
        value={value}
        name="query"
        onChange={(e) => onChange(e.currentTarget.value)}
        className="form-control my-3"
        placeholder="Search..."
        type="text"
      />
    </div>
  );
};

export default SearchBox;

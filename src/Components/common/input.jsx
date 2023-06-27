import React from "react";

const Input = ({ name, value, onchange, label, error, type }) => {
  return (
    <React.Fragment>
      <div className="mb-3">
        <label htmlFor={name}>{label}</label>
        <input
          onChange={onchange}
          value={value}
          name={name}
          className="form-control"
          id={name}
          type={type}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </React.Fragment>
  );
};

export default Input;

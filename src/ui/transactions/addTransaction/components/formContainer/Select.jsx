import React from "react";

const Select = props => {
  return (
    <div className="form-group">
      <label for={props.name}> {props.title} </label>
      <select {...props} className="form-control">
        <option value="" selected hidden>
          {props.placeholder}
        </option>
        {props.options.map(option => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;

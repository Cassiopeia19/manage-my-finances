import React from "react";

const Select2 = (props) => {
  return (
    <div className="form-group">
      <label for={props.name}> {props.title} </label>
      <select {...props} className="form-control">
        <option value="" selected hidden>
          {props.placeholder}
        </option>
        {props.options.map((item,i) => {
          return (
            <option key={i} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select2;

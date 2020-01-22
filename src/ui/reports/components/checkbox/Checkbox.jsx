import React from "react";

const Checkbox = ({ name, label, isSelected, onCheckboxChange, ...rest }) => (
  <div className="form-check">
    <label>
      <input
        {...rest} //prop forwarding
        type="checkbox"
        name={name || label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);

export default Checkbox;

import React from "react";
import PropTypes from "prop-types";
import MultiChoice from "@govuk-react/multi-choice";
import { Field, useFormState } from "react-final-form";

import Radio from "./radioFinalForm";

const RadioGroup = ({ name, label, hint, options, inline, meta }) => {
  const { errors, touched } = useFormState();

  return (
    <MultiChoice
      label={label}
      hint={hint}
      meta={{
        error: errors[name],
        touched: touched[name],
      }}
    >
      {options.map(option => (
        <Field
          name={name}
          type="radio"
          value={option.toLowerCase()}
          key={option}
          inline={inline}
          component={Radio}
        >
          {option}
        </Field>
      ))}
    </MultiChoice>
  );
};

RadioGroup.defaultProps = {
  input: {},
  meta: {},
  hint: undefined,
  inline: false,
  options: []
};

RadioGroup.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  inline: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string)
};

export default RadioGroup;

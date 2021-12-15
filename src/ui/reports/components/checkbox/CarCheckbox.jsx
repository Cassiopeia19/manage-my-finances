import React, { Component } from "react";
import Checkbox from "./Checkbox";

const OPTIONS = [
  "car insurance",
  "car maintenance",
  "car parts",
  "car payment",
  "car repairs",
  "car washes",
  "gasoline",
  "personal property taxes"
];

class CarCheckbox extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
  };

  selectAllCheckboxes = (isSelected) => {
    this.setState((prevState) => ({
      ...prevState,
      checkboxes: Object.fromEntries(
        Object.keys(prevState.checkboxes).map((key) => [key, isSelected]),
      ),
    }),
     () => {
        this.props.onChange && this.props.onChange(this.state.checkboxes);
      }
    );
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = (option) => {
    this.setState(
      (prevState) => ({
        checkboxes: {
          ...prevState.checkboxes,
          [option]: !prevState.checkboxes[option],
        },
      }),
      () => {
        this.props.onChange && this.props.onChange(this.state.checkboxes);
      }
    );
  };

  createCheckbox = (option) => (
    <Checkbox
      name="Family[]"
      label={option}
      value={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={() => this.handleCheckboxChange(option)}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <h2>Car</h2>
            {this.createCheckboxes()}
            <div className="form-group mt-2">
              <button
                type="button"
                className="btn btn-outline-warning"
                onClick={this.selectAll}
              >
                Select All
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={this.deselectAll}
              >
                Deselect All
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CarCheckbox;

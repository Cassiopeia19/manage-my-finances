import React, { Component } from "react";
import Checkbox from "./Checkbox";

const OPTIONS = [
  "church donations",
  "entertainment",
  "groceries",
  "medical bills",
  "miscellaneous",
  "vacations"
];

class MiscCheckbox extends Component {
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
    Object.keys(this.state.checkboxes).forEach((checkbox) => {
      this.setState((prevState) => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected,
        },
      }));
    });
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
  
  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter((checkbox) => this.state.checkboxes[checkbox])
      .forEach((checkbox) => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = (option) => (
    <Checkbox
      name="Misc[]"
      label={option}
      value={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={() => this.handleCheckboxChange(option)}
      //onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <h2>Misc</h2>
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

export default MiscCheckbox;

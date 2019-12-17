import React from "react";
import { render } from "react-dom";
import { Form } from "react-final-form";

import RadioGroup from "./radioGroup";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const ReportType = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit}) => (
      <form onSubmit={handleSubmit}>
        <RadioGroup
          name="reportType"
          options={["Deposits", "Withdrawls"]}
        />
      </form>
    )}
  />
);

const rootElement = document.getElementById("root");
render(<ReportType />, rootElement);

export default ReportType;

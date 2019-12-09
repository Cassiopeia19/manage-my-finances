import React from "react";
import { MdSend } from "react-icons/md";
const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div
        className="form-center"
        style={{ display: "flex", padding: "0 1rem" }}
      >
        <div
          className="form-group"
          style={{ padding: "1rem 0.75rem", flex: "0 0 50%" }}
        >
          <label
            htmlFor="charge"
            style={{
              display: "block",
              color: "grey",
              fontSize: "1rem",
              textTransform: "capitalize"
            }}
          >
            charge
          </label>
          <input
            type="text"
            className="form-control"
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid grey",
              borderRadius: "0",
              outline: "none",
              height: "3rem",
              width: "100%",
              fontSize: "16px",
              margin: "0 0 8px 0",
              padding: "0"
            }}
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div
          className="form-group"
          style={{ padding: "1rem 0.75rem", flex: "0 0 50%" }}
        >
          <label
            htmlFor="amount"
            style={{
              display: "block",
              color: "grey",
              fontSize: "1rem",
              textTransform: "capitalize"
            }}
          >
            amount
          </label>
          <input
            type="number"
            className="form-control"
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid grey",
              borderRadius: "0",
              outline: "none",
              height: "3rem",
              width: "100%",
              fontSize: "16px",
              margin: "0 0 8px 0",
              padding: "0"
            }}
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "edit" : "submit"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;

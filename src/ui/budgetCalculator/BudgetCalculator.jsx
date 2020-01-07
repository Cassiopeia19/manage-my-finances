import React, { useState, useEffect } from "react";
import "./BudgetCalculator.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import uuid from "uuid/v4";

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
function BudgetCalculator() {
  // ************* state values *******************
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");
  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // edit item
  const [id, setId] = useState(0);
  // ************* useEffect *******************
  useEffect(() => {
    console.log("we called useEffect");
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  // ************* functionality *******************
  // handle charge

  const handleCharge = e => {
    setCharge(e.target.value);
  };
  // handle amount

  const handleAmount = e => {
    setAmount(e.target.value);
  };
  // handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  // handle submit

  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "item edited" });
      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
      setCharge("");
      setAmount("");
    } else {
      // handle alert called
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount value has to be bigger than zero`
      });
    }
  };
  // clear all items
  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "all items deleted" });
  };
  // handle delete
  const handleDelete = id => {
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "item deleted" });
  };
  // handle edit
  const handleEdit = id => {
    let expense = expenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <div className="budgetCalculator" id="bugetCalculator">
        <h1
          style={{
            textAlign: "center",
            textTransform: "capitalize",
            margin: "2rem 0",
            color: "white",
            letterSpacing: "5px"
          }}
        >
          budget calculator
        </h1>
        <main className="Budget">
          <ExpenseForm
            charge={charge}
            amount={amount}
            handleAmount={handleAmount}
            handleCharge={handleCharge}
            handleSubmit={handleSubmit}
            edit={edit}
          />
          <ExpenseList
            expenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            clearItems={clearItems}
          />
        </main>
        <h1
          style={{
            textAlign: "center",
            textTransform: "capitalize",
            margin: "2rem 0",
            color: "white",
            letterSpacing: "5px"
          }}
        >
          total spending :{" "}
          <span
            style={{
              fontWeight: "300",
              color: "white",
              backgroundColor: "#bb310c",
              borderStyle: "outset",
              borderColor: "#bb310c",
              borderWidth: "5px",
              padding: "2px 5px"
            }}
          >
            $
            {expenses.reduce((acc, curr) => {
              return (acc += parseInt(curr.amount));
            }, 0)}
          </span>
        </h1>
      </div>
    </>
  );
}
export default BudgetCalculator;

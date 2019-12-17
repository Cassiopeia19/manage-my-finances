import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonGroup } from "react-bootstrap-buttons";
import "./TransactionsList.css";

// Be sure to include styles at some point, probably during your bootstraping
import "react-bootstrap-buttons/dist/react-bootstrap-buttons.css";

class TransactionsList extends Component {
  constructor(props) {
    super(props);
    this.state = { transactions: [] };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    this.setState({
      transactions: [
        {
          account: "BOA",
          date: "12/01/2019",
          type: "Deposit",
          category: "payroll",
          amount: 2000,
          notes: "blah blah blah"
        },
        {
          account: "Cash",
          date: "12/02/2019",
          type: "Withdrawal",
          category: "hair",
          amount: 45,
          notes: "Mary's house"
        },
        {
          account: "Ally",
          date: "11/27/2019",
          type: "Deposit",
          category: "Jennie",
          amount: 500,
          notes: "more notes"
        },
        {
          account: "RCU",
          date: "11/29/2019",
          type: "Withdrawal",
          category: "house repairs",
          amount: 1000,
          notes: "notes about nothing"
        },
        {
          account: "VCU",
          date: "11/01/2019",
          type: "Withdrawal",
          category: "water bill",
          amount: 150,
          notes:
            "the water bill was high because of a water leak, which has now been fixed"
        },
        {
          account: "BOA",
          date: "11/29/2019",
          type: "Withdrawal",
          category: "Jennie",
          amount: 600,
          notes: "black friday"
        }
      ]
    });
  }

  render() {
    const { transactions } = this.state;
    return (
      <>
        <ButtonGroup>
          <Button active style={{ backgroundColor: "#1e7b1e", color: "white" }}>
            Current
          </Button>
          <Button style={{ backgroundColor: "#cdf3cd", color: "black" }}>
            All
          </Button>
        </ButtonGroup>
        <Table
          className="mt-4"
          striped
          highlight
          bordered
          hover
          size="md"
          style={{ backgroundColor: "#fafafa" }}
        >
          <thead>
            <tr>
              <th>Account</th>
              <th>Date</th>
              <th>Type</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transactions => (
              <tr key={transactions.transactionId}>
                <td>{transactions.account}</td>
                <td>{transactions.date}</td>
                <td>{transactions.type}</td>
                <td>{transactions.category}</td>
                <td>{transactions.amount}</td>
                <td>{transactions.notes}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default TransactionsList;





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
            "AS U BEING MY FRIEND I WILL WARN ABOUT MY HUMAN BEING IN THE TELESCOPE." +
            " BUT WHAT I REALLY NEED TO TALK TO U ABOUT IS THE FLYING SAUSAGE INCIDENT I DON’T " +
            "THINK I TALKED TO U ABOUT THIS BUT U REALLY SHOULD KNOW THAT I AM SECRETLY A FLYING " +
            "SAUSAGE NOT ONLY AM I A FLYING SAUSAGE BUT I AM THE FLYING SAUSAGE THAT TOOK THE " +
            "WALKING CHEESEBURGERS PICKLES. I NEED UR HELP TO ESCAPE THE POLICE MEN BECAUSE THE ONLY" +
            " REASON I STOLE HIS PICKLES WAS BECAUSE I WAS GOING THROUGH THIS THING WHERE ALL I WANTED" +
            " TO DO WAS EAT PICKLES AND MY MOM WOULDN’T BUY ANY. I HAD NO MONEY SO I DIDN’T KNOW WHAT " +
            "ELSE TO DO. I WALKED OVER TO THE CHEESEURGER AND TOOK HIS PICKLES. APPARENTLY THATS AGAINST" +
            " THE LAW BUT I STILL DID IT. I ALREADY ATE THE PICKLES SO I CAN’T RETURN THEM. I ASKED BOBBYJO" +
            " TO PUT ME IN A BOX AND SEND ME TO NORTH CAROLINA SO I AM NOW IN NEW ENGLAND I NEED U TO GO ON A" +
            " SECRET MISSION AND GO BUY ME A PRIVATE JET U SEE I CAN NOT FLY ANYMORE SO I NEED SOMEONE TO SEND " +
            "ME A PRIVATE JET NOT A AIRPLANE I ALREADY HAVE 2,345 AIRPLANES PLEASE DO NOT SEND ME AN AIRPLANE." +
            "PLEASE AND THANK YOU I HOPE U CAN COMPLETE MY MISSION."
            //the notes were just something found on the internet that was used only for dummy data
        },
        {
          account: "BOA",
          date: "11/29/2019",
          type: "Withdrawal",
          category: "JennieOwes",
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





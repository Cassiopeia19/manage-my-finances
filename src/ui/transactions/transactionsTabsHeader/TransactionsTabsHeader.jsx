/* eslint-disable eqeqeq */
import React from "react";
import classnames from "classnames";
import "./TransactionsTabsHeader.css";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import TransactionsLayout from "../transactionCard/TransactionsLayout";
import AddTransaction from "../../transactions/addTransaction/AddTransaction";

export default class TransactionsTabsHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              id="transactionsList"
              onClick={() => {
                this.toggle("1");
              }}
            >
              Transactions List
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              id="addTransaction"
              onClick={() => {
                this.toggle("2");
              }}
            >
              Add Transaction
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            {this.state.activeTab == 1 ? <TransactionsLayout /> : null}
          </TabPane>
          <TabPane tabId="2">
            {this.state.activeTab == 2 ? <AddTransaction /> : null}
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

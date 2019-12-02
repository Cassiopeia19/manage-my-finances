import React, { useState } from "react";
import classnames from "classnames";
import "./TransactionsHeader.css";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import TransactionsList from "../ui/transactions/TransactionsList.jsx";
import AddTransaction from "../ui/transactions/AddTransaction.jsx";
import UpdateDeleteTransactions from "../ui/transactions/UpdateDeleteTransactions.jsx";
import Archive from "../ui/transactions/Archive.jsx";

const TransactionsHeader = props => {
  const [activeTab, setActiveTab] = useState("transactionsList");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <header>
        <div>
          <br></br>
          <Nav tab>
            <NavItem className="transactionsList">
              <NavLink
                className={classnames({
                  active: activeTab === "1"
                })}
                onClick={() => {
                  toggle("1");
                }}
              >
                <h5>Transactions List</h5>
              </NavLink>
            </NavItem>

            <NavItem className="addTransaction">
              <NavLink
                className={classnames({
                  active: activeTab === "2"
                })}
                onClick={() => {
                  toggle("2");
                }}
              >
                <h5>Add Transaction</h5>
              </NavLink>
            </NavItem>
            <NavItem className="updateDelete">
              <NavLink
                className={classnames({
                  active: activeTab === "3"
                })}
                onClick={() => {
                  toggle("3");
                }}
              >
                <h5>Update/Delete Transaction</h5>
              </NavLink>
            </NavItem>
            <NavItem className="archive">
              <NavLink
                className={classnames({
                  active: activeTab === "4"
                })}
                onClick={() => {
                  toggle("4");
                }}
              >
                <h5>Archive</h5>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </header>
      <div>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1" style={{ backgroundColor: "#d5d294" }}>
            <Row>
              {/* <Col sm="6"> */}
              <TransactionsList />
              {/* </Col> */}
            </Row>
          </TabPane>
          <TabPane tabId="2" style={{ backgroundColor: "#c1d3af" }}>
            <Row>
              <Col sm="12">
                <AddTransaction />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3" style={{ backgroundColor: "#a8d3ca" }}>
            <Row>
              <Col sm="12">
                <UpdateDeleteTransactions />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4" style={{ backgroundColor: "#86d3e4" }}>
            <Row>
              <Col sm="12">
                <Archive />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default TransactionsHeader;

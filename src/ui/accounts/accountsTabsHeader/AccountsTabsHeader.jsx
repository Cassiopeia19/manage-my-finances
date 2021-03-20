/* eslint-disable eqeqeq */
import React from "react";
import classnames from "classnames";
import "./AccountsTabsHeader.css";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import AddNewAccount from '../addNewAccount/AddNewAccount'
import AccountsBalanceList from '../AccountsBalanceList'
import Archive from '../Archive'

export default class UsersTabsHeader extends React.Component {
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
              id="accountsList"
              onClick={() => {
                this.toggle("1");
              }}
            >
              Accounts and their Current Balances
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              id="addAccount"
              onClick={() => {
                this.toggle("2");
              }}
            >
              Add Account
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              id="archive"
              onClick={() => {
                this.toggle("3");
              }}
            >
              Archive
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            {this.state.activeTab == 1 ? <AccountsBalanceList /> : null}
          </TabPane>
          <TabPane tabId="2">
            {this.state.activeTab == 2 ? <AddNewAccount /> : null}
          </TabPane>
          <TabPane tabId="3">
            {this.state.activeTab == 3 ? <Archive /> : null}
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

/* eslint-disable eqeqeq */
import React from "react";
import classnames from "classnames";
import "./UsersTabsHeader.css";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import AddNewUser from '../addNewUser/AddNewUser'
import UsersList from '../UsersList'

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
              id="usersList"
              onClick={() => {
                this.toggle("1");
              }}
            >
              Users List
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              id="addUser"
              onClick={() => {
                this.toggle("2");
              }}
            >
              Add User
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            {this.state.activeTab == 1 ? <UsersList /> : null}
          </TabPane>
          <TabPane tabId="2">
            {this.state.activeTab == 2 ? <AddNewUser /> : null}
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

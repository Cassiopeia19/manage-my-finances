import React, {Component} from 'react'
import UserDataService from "../../api/UserDataService";
import AuthenticationService from "../../components/authentication/AuthenticationService.js";
import {withRouter} from 'react-router-dom'

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      message: null,
    };
    this.deleteUserClicked = this.deleteUserClicked.bind(this);
    this.updateUserClicked = this.updateUserClicked.bind(this);
    this.refreshUsers = this.refreshUsers.bind(this);
  }

  componentWillUnmount() {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidMount() {
    return fetch("http://localhost:3000/users/")
      .then((response) => {
        return response.json(); //or remove brackets: then(response => response.json())
      })
      .then((users) => {
        console.log("users: " + users);
        this.setState({ users });
        console.log(users)
      })
      .then((err) => {
        console.log(err);
      });
  }

  refreshUsers() {
   window.location.reload(false);
  }

  deleteUserClicked(id) {
    let username = AuthenticationService.getLoggedInUsername();
    UserDataService.deleteUser(username, id).then((response) => {
      this.setState({
        message: `Deletion of user ${id} was successful`,
      });
      this.refreshUsers();
    });
  }

  updateUserClicked(id) {
     this.props.history.push(`/users/${id}`);
  }

  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h1>Users</h1>
          {this.state.message && (
            <div className="alert alert-success">{this.state.message}</div>
          )}
          {console.log("user is array: " + Array.isArray(this.state.users))}
          <div className="container">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Email Address</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users &&
                  this.state.users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.username}</td>
                      <td>{user.password}</td>
                      <td>{user.email}</td>

                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => this.updateUserClicked(user.id)}
                        >
                          Update
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => this.deleteUserClicked(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="row"></div>
            <br />
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(UsersList);

import React, {Component} from 'react'
import UserDataService from "../../api/UserDataService";
import AuthenticationService from "../../components/authentication/AuthenticationService.js";

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

  componentWillUnmount() {
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidMount() {
    this.refreshUsers();
    console.log(this.state);
  }

  refreshUsers() {
    let username = AuthenticationService.getLoggedInUserName();
    UserDataService.retrieveAllUsers(username).then((response) => {
      this.setState({ users: response.data });
    });
  }

  deleteUserClicked(id) {
    let username = AuthenticationService.getLoggedInUserName();
    UserDataService.deleteUser(username, id).then((response) => {
      this.setState({
        message: `Deletion of user ${id} was successful`,
      });
      this.refreshUsers();
    });
  }

  updateUserClicked(id) {
    console.log("update " + id);
    this.props.history.push(`/users/${id}`);
  }

  render() {
    return (
      <>
        <div style={{textAlign: "center"}}>
          <h1>Users</h1>
          {this.state.message && (
            <div className="alert alert-success">{this.state.message}</div>
          )}
          <div className="container">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Email Address</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => (
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
            <br />
          </div>
        </div>
      </>
    );
  }
}
export default UsersList;

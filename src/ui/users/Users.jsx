import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import UserDataService from "../../api/UserDataService.js";
import AuthenticationService from "../../components/authentication/AuthenticationService.js";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.usersId,
      username: "",
      password: "",
      email: "",
    };
    console.log(this.props);
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    if (this.state.id === -1) {
      return;
    }

    let username = AuthenticationService.getLoggedInUsername();
    UserDataService.retrieveUser(username, this.state.id).then((response) =>
      this.setState({
        username: response.data.username,
        password: response.data.password,
        email: response.data.email,
      })
    );
  }

  validate(values) {
    let errors = {};

    if (!values.username) {
      errors.username = "Enter a username";
    } else if (values.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    if (!values.password) {
      errors.password = "Enter a password";
    }

    if (!values.email) {
      errors.email = "Enter an email address";
    }

    return errors;
  }

  onSubmit(values) {
    let user = {
      id: this.state.id,
      username: values.username,
      password: values.password,
      email: values.email,
    };
    console.log(values);

      UserDataService.updateUser(this.state.id, user).then(() =>
        this.props.history.push(`/users/${user.id}`)
      )
      console.log("values: " + values);
  if (!alert("Your update(s) were successfull"))
    document.location = "/users-home";
  }

  render() {
    let { username, password, email } = this.state;
    return (
      <div>
        <h1>User Updates</h1>
        <div className="container">
          <Formik
            initialValues={{ username, password, email }}
            onSubmit={this.onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={this.validate}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert alert-danger"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-danger"
                />

                <fieldset className="form-group">
                  <label>Username</label>
                  <Field className="form-control" type="text" name="username" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Password</label>
                  <Field className="form-control" type="text" name="password" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Email Address</label>
                  <Field className="form-control" type="email" name="email" />
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Users;

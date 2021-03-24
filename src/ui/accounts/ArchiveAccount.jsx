import React, { Component } from "react";
import AccountDataService from "../../api/AccountDataService";

class ArchiveAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //id: this.props.match.params.id,
      accountName: "",
      deposits: "",
      asOfDate: "",
      isActive: true,
    };
    this.changeAccountNameHandler = this.changeAccountNameHandler.bind(this);
    this.changeDepositsHandler = this.changeDepositsHandler.bind(this);
    this.changeAsOfDateHandler = this.changeAsOfDateHandler.bind(this);
    this.changeIsActiveHandler = this.changeIsActiveHandler.bind(this);
    this.archiveAccount = this.archiveAccount.bind(this);
  }

  componentDidMount() {
    AccountDataService.getAccountById(this.state.id).then((res) => {
      let account = res.data;
      this.setState({
        accountName: account.accountName,
        deposits: account.deposits,
        asOfDate: account.asOfDate,
        isActive: account.isActive,
      });
    });
  }

  archiveAccount = (e) => {
    e.preventDefault();
    let account = {
      accountName: this.state.accountName,
      deposits: this.state.deposits,
      asOfDate: this.state.asOfDate,
      isActive: this.state.isActive,
    };
    console.log("account => " + JSON.stringify(account));
    console.log("id => " + JSON.stringify(this.state.id));
    AccountDataService.archiveAccount(account, this.state.id).then((res) => {
      this.props.history.push("/accounts");
    });
  };

  changeAccountNameHandler = (event) => {
    this.setState({ accountName: event.target.value });
  };

  changeDepositsHandler = (event) => {
    this.setState({ deposits: event.target.value });
  };

  changeAsOfDateHandler = (event) => {
    this.setState({ asOfDate: event.target.value });
  };

  changeIsActiveHandler = (event) => {
    this.setState({ isActive: event.target.value });
  };

  cancel() {
    this.props.history.push("/accounts");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Archive Account</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Account Name: </label>
                    <input
                      placeholder="account name"
                      name="accountName"
                      className="form-control"
                      value={this.state.accountName}
                      onChange={this.changeAccountNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Balance: </label>
                    <input
                      placeholder="balance"
                      name="deposits"
                      className="form-control"
                      value={this.state.deposits}
                      onChange={this.changeDepositsHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> As of: </label>
                    <input
                      placeholder="as of date"
                      name="asOfDate"
                      className="form-control"
                      value={this.state.asOfDate}
                      onChange={this.changeAsOfDateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Is Active?: </label>
                    <input
                      placeholder="Is account active?"
                      name="isActive"
                      className="form-control"
                      value={this.state.isActive}
                      onChange={this.changeIsActiveHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.archiveAccount}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArchiveAccount;

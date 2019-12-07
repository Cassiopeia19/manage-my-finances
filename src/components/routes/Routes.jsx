import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "../authentication/AuthenticatedRoute.jsx";
import AccountsBalanceList from "../../ui/accounts/AccountsBalanceList.jsx";
import Error from "../../containers/Error.jsx";
import Header from "../../containers/Header.jsx";
import Footer from "../../containers/Footer.jsx";
import Logout from "../../ui/Logout.jsx";
import Welcome from "../welcome/Welcome.jsx";
import Accounts from "../../ui/accounts/Accounts.jsx";
import Vacations from "../../ui/vacations/Vacations.jsx";
import TransactionsHome from "../../ui/transactions/TransactionsHome";
import TransactionsList from "../../ui/transactions/transactionsList/TransactionsList.jsx";
import AddTransaction from "../../ui/transactions/addTransaction/AddTransaction";
import UpdateDeleteTransactions from "../../ui/transactions/UpdateDeleteTransactions";
import Reports from "../../ui/reports/Reports.jsx";
import Login from "../../ui/login/Login.jsx";

class Routes extends Component {
  render() {
    return (
      //look into if the className of AccountComponent is actually needed
      //<div className="AccountComponent">
      <div>
        <Router>
          <>
            <Header />
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/login" component={Login} />

              <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
              <AuthenticatedRoute
                path="/accounts/:accountId"
                component={Accounts}
              />
              <AuthenticatedRoute
                path="/accounts"
                component={AccountsBalanceList}
              />
              <AuthenticatedRoute
                path="/transactions-home"
                component={TransactionsHome}
              />
              <AuthenticatedRoute
                path="/transactions-list"
                component={TransactionsList}
              />
              <AuthenticatedRoute
                path="/add-transaction"
                component={AddTransaction}
              />
              <AuthenticatedRoute
                path="/update-delete-transactions"
                component={UpdateDeleteTransactions}
              />
              <AuthenticatedRoute path="/reports" component={Reports} />
              <AuthenticatedRoute path="/vacations" component={Vacations} />
              <AuthenticatedRoute path="/logout" component={Logout} />
              <Route component={Error} />
            </Switch>
            <Footer />
          </>
        </Router>
      </div>
    );
  }
}

export default Routes;

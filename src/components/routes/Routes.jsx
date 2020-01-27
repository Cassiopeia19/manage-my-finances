import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "../authentication/AuthenticatedRoute.jsx";
import AccountsBalanceList from "../../ui/accounts/AccountsBalanceList.jsx";
import Error from "../../containers/Error.jsx";
import Header from "../../containers/header/Header";
import Footer from "../../containers/Footer.jsx";
import Logout from "../../ui/Logout.jsx";
import Welcome from "../../ui/welcome/Welcome";
import Accounts from "../../ui/accounts/Accounts.jsx";
import Vacations from "../../ui/vacations/Vacations"
import TransactionsHome from "../../ui/transactions/transactionsHome/TransactionsHome";
import TransactionsList from "../../ui/transactions/transactionsList/TransactionsList.jsx";
import AddTransaction from "../../ui/transactions/addTransaction/AddTransaction";
import Reports from "../../ui/reports/Reports.jsx";
import Login from "../../ui/login/Login.jsx";
import BudgetCalculator from '../../ui/budgetCalculator/BudgetCalculator';
import ForgotPassword from '../../ui/login/forgotPassword/ForgotPassword';
import NewUser from '../../ui/welcome/newUser/NewUser'

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <>
            <Header />
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/forgotpassword" component={ForgotPassword} />

              <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
              <AuthenticatedRoute path="/new-user" component={NewUser} />
              <AuthenticatedRoute
                path="/accounts/:accountId"
                component={Accounts}
              />
              <AuthenticatedRoute
                path="/accounts"
                component={AccountsBalanceList}
              />
              <AuthenticatedRoute
                path="/budget-calculator"
                component={BudgetCalculator}
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

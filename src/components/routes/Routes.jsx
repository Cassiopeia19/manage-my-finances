import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "../authentication/AuthenticatedRoute.jsx";
import AccountsHome from "../../ui/accounts/accountsHome/AccountsHome";
import AccountsBalanceList from '../../ui/accounts/AccountsBalanceList'
import AddNewAccount from '../../ui/accounts/addNewAccount/AddNewAccount'
import Error from "../../containers/Error.jsx";
import Header from "../../containers/header/Header";
import Footer from "../../containers/Footer.jsx";
import Logout from "../../ui/Logout.jsx";
import Welcome from "../../ui/welcome/Welcome";
import Accounts from "../../ui/accounts/Accounts.jsx";
import Carousel from "../../ui/vacations/Carousel"
import TransactionsHome from "../../ui/transactions/transactionsHome/TransactionsHome";
import TransactionsList from "../../ui/transactions/transactionsList/TransactionsList.jsx";
import AddTransaction from "../../ui/transactions/addTransaction/AddTransaction";
import UpdateTransaction from "../../ui/transactions/transactionCard/UpdateTransaction"
import Reports from "../../ui/reports/Reports.jsx";
import Login from "../../ui/login/Login.jsx";
import BudgetCalculator from '../../ui/budgetCalculator/BudgetCalculator';
import UsersHome from '../../ui/users/usersHome/UsersHome'
import AddNewUser from '../../ui/users/addNewUser/AddNewUser'; 
import Users from '../../ui/users/Users'
import UsersList from '../../ui/users/UsersList'
import Archive from '../../ui/accounts/Archive'
import TransactionsFormContainer from '../../ui/transactions/addTransaction/containers/TransactionsFormContainer'
// import ForgotPassword from '../../ui/forgotPassword/ForgotPassword'

class Routes extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <Router>
          <>
            <Header />
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/login" component={Login} />
              {/* <Route path ="/forgot-password" component={ForgotPassword} /> */}
              <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
              <AuthenticatedRoute path="/users-home" component={UsersHome} />
              <AuthenticatedRoute path="/add-user" component={AddNewUser} />
              <AuthenticatedRoute path="/users-list" component={UsersList} />
              <AuthenticatedRoute
                path="/accounts/:accountId"
                component={Accounts}
              />
              <AuthenticatedRoute
                path="/transactionsformcontainer/:transactionId"
                component={TransactionsFormContainer}
              />
              <AuthenticatedRoute
                path="/update-transaction/:transactionId" component={UpdateTransaction}
                />
              <AuthenticatedRoute path="/users/:usersId" component={Users} />
              <AuthenticatedRoute
                path="/accounts-home"
                component={AccountsHome}
              />
              <AuthenticatedRoute
                path="/accounts-list"
                component={AccountsBalanceList}
              />
              <AuthenticatedRoute path="archive" component={Archive} />
              <AuthenticatedRoute
                path="add-account"
                component={AddNewAccount}
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
              <AuthenticatedRoute
                path="update-transaction"
                component={UpdateTransaction}
                />
              <AuthenticatedRoute path="/reports" component={Reports} />
              <AuthenticatedRoute path="/vacations" component={Carousel} />
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

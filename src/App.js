import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import About from './components/About/About';
import AddTask from './components/AddTask/AddTask';
import Account from './components/Auth/Account/Account';
import Login from './components/Auth/Login/Login';
import Logout from './components/Auth/Logout/Logout';
import SignUp from './components/Auth/SignUp/SignUp';
import Home from './components/Home/Home';
import Tasks from './containers/Tasks/Tasks';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    // let authRoutes = (
    //   <React.Fragment>
    // <Route path="/login" component={Login} />
    // <Route path="/signUp" component={SignUp} />
    //   </React.Fragment>
    // );
    // if (this.props.isAuthenticated) {
    //   authRoutes = (
    // <React.Fragment>
    //   <Route path="/logout" component={Logout} />
    //   <Route path="/account" component={Account} />
    // </React.Fragment>
    //   );
    // }
    const authRoutes = this.props.isAuthenticated ? (
      <React.Fragment>
        <Route path="/logout" component={Logout} />
        <Route path="/account" component={Account} />
      </React.Fragment>
    ) : null;

    return (
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/addTask" component={AddTask} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
          {authRoutes}
          <Route path="/home" exact component={Home} />
          <Redirect to="/home" />
        </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token
  };
};

export default connect(mapStateToProps, null)(App);

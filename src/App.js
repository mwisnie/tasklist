import './App.css';

import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import About from './components/About/About';
import AddTask from './components/AddTask/AddTask';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/SignUp/SignUp';
import Home from './components/Home/Home';
import Tasks from './containers/Tasks/Tasks';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/addTask" component={AddTask} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default App;

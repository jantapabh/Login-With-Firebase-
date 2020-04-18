import React, { Component } from 'react';
import './App.css';

// Router
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';

//import Components and Pages
import LoginPage from './components/LoginPage'
import Home from './components/Home'
//หน้าแอปส่วนหลักในการทำการ Route และrender หน้า

import fire from './config/fire'



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener()
  }


  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }


  render() {
    if (this.state.user == null) {
      return (
        <div>
          <LoginPage />
        </div>

      );
    }
    return (
      <div>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/orders" component={LoginPage} />
          <Route path="/forminput" component={LoginPage} />
          <Route path="/pricing" component={LoginPage} />
        </div>
      </div>
    )
  }
}
export default App





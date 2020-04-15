import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import fire from './config/fire';
import Home from './components/Home'

class App extends Component{

  constructor(props){
    super(props)
      this.state={
        user: {}
      }
    }

  componentDidMount(){
    this.authListener()
  }


  authListener() {
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })
  }


  render(){
    if(this.state.user == null)
    {
    return(
      <div>
        <LoginPage />
        </div>

    );
    }
    return(
      <div>
        <Home />
      </div>
    )
  }
}
export default App




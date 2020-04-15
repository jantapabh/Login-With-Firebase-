import React, {useState } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import fire from './config/fire';
import Home from './components/Home'

const App = props => {


  const [user, setUser] = useState({})




    fire.auth().onAuthStateChanged((user) => {

      if (user) {
       setUser({ user })
      }
      else {
        setUser({ user: null })
      }
    })
  




    if (user == null) {
      return (
        <div >
          <div>
            <LoginPage />
          </div>
        </div>
      );
    }

    return (
      <div>
        <Home />
      </div>
    )
  }



export default App


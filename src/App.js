import React, {Component} from 'react';
import './App.css';
import Login from './components/Login';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


class App extends Component{


  render(){

    return(
      <div >
        <div style={{ border: "2px solid green", margin: 50, padding: 50 }}>
        <Login />
        </div>
        </div>
    )
  }
}

export default App

// const App = () => {

//   return(
//     <div>
//       <Login />
//       </div>
//   )
// }

// export default App
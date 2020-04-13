import React, { Component, useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import fire from "../config/fire";
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignedIn, setIsSignedIn] = useState(false)

 const uiConfig = {

        signInFlow: "popup",
        signInOptions: [

            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],

        callback: {

            signInSuccess: () => false
        }
    }

    const componentDidMount = () => {

      

        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
    }

    const login = e => {

        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password).then((u) =>{
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }


    const signup = e => {

        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form>
                            <p className="h5 text-center mb-4">Sign up</p>
                            <div className="grey-text">
                                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" name="email" onChange={(e)=> setEmail(e.target.value)} />
                                <MDBInput label="Your password" icon="lock" group type="password" name="password" validate onChange={(e)=> setPassword(e.target.value)} />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary" onClick={login}>LOGIN</MDBBtn>
                                <MDBBtn color="primary" onClick={signup}>Register</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

// class Login extends Component {


//     constructor(props) {

//         super(props)
//         this.login = this.login.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//         this.signup = this.signup.bind(this)
//         this.state = {

//             email: "",
//             password: ""
//         }

//     }

//     login(e) {

//         e.preventDefault()

//         fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
//             console.log(u)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }

//     handleChange(e) {

//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     signup(e){

//         e.preventDefault()
//         fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {

//             console.log(u)
//         }).catch((err) => {
//             console.log(err)
//         })

//     }


//     render() {
//         return (
            // <MDBContainer>
            //     <MDBRow>
            //         <MDBCol md="6">
            //             <form>
            //                 <p className="h5 text-center mb-4">Sign up</p>
            //                 <div className="grey-text">
            //                     <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            //                         success="right" name="email" value={this.state.email} onChange={this.handleChange} />
            //                     <MDBInput label="Your password" icon="lock" group type="password" name="password" validate value={this.state.password} onChange={this.handleChange} />
            //                 </div>
            //                 <div className="text-center">
            //                     <MDBBtn color="primary" onClick={this.login}>LOGIN</MDBBtn>
            //                     <MDBBtn color="primary" onClick={this.signup}>Register</MDBBtn>
            //                 </div>
            //             </form>
            //         </MDBCol>
            //     </MDBRow>
            // </MDBContainer>
//         );
//     }
// }
// // 
export default Login;
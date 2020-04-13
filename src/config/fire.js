import firebase from 'firebase'

const firebaseConfig = {

    apiKey: "AIzaSyBev4Fo0jRygxGEizvKWG8kN2UI5GE7RBY",
    authDomain: "mini-project-f77ac.firebaseapp.com",
    databaseURL: "https://mini-project-f77ac.firebaseio.com",
    projectId: "mini-project-f77ac",
    storageBucket: "mini-project-f77ac.appspot.com",
    messagingSenderId: "596162951065",
    appId: "1:596162951065:web:22c5044c93afb1a4938508",
    measurementId: "G-S1FCYZB59H"

  };

  const fire = firebase.initializeApp(firebaseConfig)


  export default fire;

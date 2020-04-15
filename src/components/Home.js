import React from 'react'
import fire from '../config/fire'
import firebase from 'firebase'


const Home = () => {

const logout = e => {

    fire.auth().signOut();
}
    return (
        <div>
            Home Page
            <div>
            <button onClick={logout}>LOGOUT</button>
            </div>
        </div>
    )
}

export default Home;
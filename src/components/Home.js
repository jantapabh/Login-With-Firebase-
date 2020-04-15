import React from 'react'
import fire from '../config/fire'




const Home = props => {

    const logout = () => {

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
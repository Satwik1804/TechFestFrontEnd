import React, { useContext, useEffect } from 'react';
import Home from './Home.js';
import Context from '../context/context.js';

function Logout(props) {
    const context = useContext(Context);
    const { setLogin } = context;

    useEffect(() => {
        document.getElementById("login").style.display = "block";
        document.getElementById("logout").style.display = "none";
        props.showAlert("Logged out Successfully", "success");
        // Return a cleanup function to reset the styles when the component unmounts
        // return () => {
        //     document.getElementById("login").style.display = "none";
        //     document.getElementById("logout").style.display = "block";
        // };
    }, []);

    // Update the login state after the styles are set
    setLogin(false);

    return <div><Home /></div>
}

export default Logout;

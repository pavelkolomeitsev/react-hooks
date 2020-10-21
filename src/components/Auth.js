import React from 'react';

import Card from './UI/Card';
import classes from "./Auth.module.css";

const Auth = props => {

    const loginHandler = () => { };

    return (
        <div className={classes.Auth}>
            <h2>You are not authenticated!</h2>
            <p>Please log in to continue.</p>
            <button onClick={loginHandler}>Log In</button>
        </div>
    );
 };

export default Auth;
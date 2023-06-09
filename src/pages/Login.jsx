import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Login() {
    return ( 
        <div className="menu-container">
            <Link to="/home">
            <button>Login</button>
            </Link>
            <Link to="/register">
            <button>Register</button>
            </Link>
        </div>
     );
}

export default Login;
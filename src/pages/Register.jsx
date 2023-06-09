import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Register() {
    return ( 
        <div className="content-container">
            <span>
                <p>Här skapar man nytt konto. Men jag fick inte till det.</p>
                <Link to="/">
                <button>CREATE ACCOUNT</button>
                </Link>
            </span>
        </div>
     );
}

export default Register;
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Register() {
    return ( 
        <div>
            Här skapar man nytt konto
            <Link to="/">
            <button>CREATE ACCOUNT</button>
            </Link>
        </div>
     );
}

export default Register;
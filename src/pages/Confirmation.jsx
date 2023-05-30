import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Confirmation() {
    return ( 
        <div>
            Tack för ditt köp, din mat kommer om en stund. gg
            <Link to="/home">
            <button>Continue</button>
            </Link>
        </div>
     );
}

export default Confirmation;
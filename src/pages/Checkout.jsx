import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Checkout() {
    return ( 
        <div>
            <Link to="/cart">
            <button>Back</button>
            </Link>
            Här väljer man betalningsmetod och slutför köp
            <Link to="/confirmation">
            <button>CONFIRM ORDER</button>
            </Link>
        </div>
     );
}

export default Checkout;
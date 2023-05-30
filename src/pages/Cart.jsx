import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Cart() {
    return ( 
        <div>
            <Link to="/home">
            <button>Back</button>
            </Link>
            Här ligger alla items i carten
            <Link to="/checkout">
            <button>CHECKOUT</button>
            </Link>
        </div>
     );
}

export default Cart;
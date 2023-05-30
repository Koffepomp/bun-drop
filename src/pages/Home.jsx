import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Home() {
    return ( 
    <div className="content-container">
        Welcome to Bun Drop!
        <Link to="/menu">
        <button>Menu</button>
        </Link>
        <Link to="/cart">
        <button>Cart</button>
        </Link>
    </div>
    );
}

export default Home;
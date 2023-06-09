import React from 'react';
import DronePicture from '../images/drone_delivery.png'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Confirmation() {

    const deliveryTime = Math.floor(Math.random() * 60) + 1;

    return ( 
        <div className="cart-container">
          <h1>THANK YOU FOR YOUR ORDER!</h1>
          <img className="burger-image" src={DronePicture}/>
            <h3>Your food is on it's way!</h3>
            <h3>Estimated time of arrival:</h3>
            <h3 className="white-text">{deliveryTime} minutes...</h3>
        <Link to="/home">
        <button>CONTINUE</button>
        </Link>
        </div>
     );
}

export default Confirmation;
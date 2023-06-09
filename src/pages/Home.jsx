import React from 'react';
import PopularBurger from '../images/nyburgare.png'
import NewestBurger from '../images/snippburgare.png'

function Home() {
    return ( 
    <div className="content-container">
        <h1 className="welcome-text">Welcome, Christopher!</h1>
        <p>What would you like to eat today?</p>
       
        <div className="content-container-burgers">
            <h3>MOST POPULAR BURGER</h3>
            <img className="burger-image" src={PopularBurger}/>
            <h3 className="white-text">Nyburgare</h3>
            <p className="white-text">Blandfärs för maximal njutning och förintelse.</p>
            <p className="white-text">129 kr</p>
            <hr></hr>

            <h3>NEWEST BURGER</h3>
            <img className="burger-image" src={NewestBurger}/>
            <h3 className="white-text">Snippburgare</h3>
            <p className="white-text">Konflikt och tjaffs ingår. Ej värd det.</p>
            <p className="white-text">3 kr</p>
        </div>
    </div>
    );
}

export default Home;
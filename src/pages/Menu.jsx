import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Burger from '../components/Burger'

function Menu() {

    const [burgers, setBurgers] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:7000/burgers')
        .then((res) => res.json())
        .then((data) => setBurgers(data))
    })

    return ( 
        <div>
            <Link to="/home">
            <button>Back</button>
            </Link>
            { burgers.map((burger) => (
                <Burger key={burger.id} name={burger.name} image={burger.image}/>
            ))}
            <Link to="/cart">
            <button>Cart</button>
            </Link>
        </div>
     );
}

export default Menu;
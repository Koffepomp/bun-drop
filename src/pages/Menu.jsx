import React, { useEffect, useState } from 'react';
import Burger from '../components/Burger'

function Menu() {

    const [burgers, setBurgers] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:7000/burgers')
        .then((res) => res.json())
        .then((data) => setBurgers(data))
    })

    return ( 
        <div className="menu-container">
            { burgers.map((burger) => (
                <Burger
                id={burger.id}
                key={burger.id}
                name={burger.name}
                quantity = {1}
                description={burger.description}
                price={burger.price}
                image={burger.image}/>
            ))}
        </div>
     );
}

export default Menu;
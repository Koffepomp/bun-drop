import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import OrderManager from '../managers/OrderManager'

function Cart() {

    const [cart, setCart] = useState(OrderManager.LoadCart())

    async function HandleClick(e) {

        if (e.target.innerText === "+") {
            await OrderManager.AddToCartFromId(e.target.id)
            setCart(OrderManager.LoadCart())
        }
        else if (e.target.innerText === "-") {
            await OrderManager.RemoveFromCartFromId(e.target.id)
            setCart(OrderManager.LoadCart())
        }
    }

    return ( 
        <div className="cart-container">
            {console.log(cart)}
            {cart.map(burger => (
                <div key={burger.id}>
                    <div className="content-container-cart">
                        <img className="burger-image-small" src={require(`../images/${burger.image}`)}/>
                        <span>
                            <h3 className="white-text">{burger.name}</h3>
                            <p className="white-text">{burger.description}</p>
                            <p className="white-text">{burger.price} kr</p>
                        </span>
                        <div className="cart-quantity-container">
                                <button id={burger.id} onClick={HandleClick} className="cart-quantity">+</button>
                                <p>{burger.quantity}</p>
                                <button id={burger.id} onClick={HandleClick} className="cart-quantity">-</button>
                        </div>
                    </div>
                    <hr></hr>
                </div>
            ))}
            <span>
                <h1>TOTAL COST: 500 kr</h1>
            </span>
            <Link to="/checkout">
            <button>CHECKOUT</button>
            </Link>
        </div>
     );
}

export default Cart;
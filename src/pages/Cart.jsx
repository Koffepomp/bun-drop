import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import CartManager from '../managers/CartManager'

function Cart() {

    const [cart, setCart] = useState(CartManager.LoadCart())

    async function HandleClick(e) {

        if (e.target.innerText === "+") {
            await CartManager.AddToCartFromId(e.target.id)
            setCart(CartManager.LoadCart())
        }
        else if (e.target.innerText === "-") {
            await CartManager.RemoveFromCartFromId(e.target.id)
            setCart(CartManager.LoadCart())
        }
    }

    return (
        <div className="cart-container">
          {console.log(cart)}
          {(() => {
            if (cart.length === 0) {
              return <h1>Your cart is empty!</h1>;
            } else {
              return (
                <>
                  {cart.map((burger) => (
                    <div key={burger.id}>
                      <div className="content-container-cart">
                        <img className="burger-image-small" src={require(`../images/${burger.image}`)}/>
                        <span>
                          <h3 className="white-text">{burger.name}</h3>
                          <p className="white-text">{burger.description}</p>
                          <p className="white-text">{burger.price} kr</p>
                        </span>
                        <div className="cart-quantity-container">
                          <button id={burger.id} onClick={HandleClick} className="cart-quantity increase">+</button>
                          <p>{burger.quantity}</p>
                          <button id={burger.id} onClick={HandleClick} className="cart-quantity decrease">-</button>
                        </div>
                      </div>
                      <hr></hr>
                    </div>
                ))}
                <span>
                    <h1>TOTAL COST:{" "}
                    {cart.reduce((total, burger) => total + burger.price * burger.quantity, 0)}{" "}kr</h1>
                </span>
                    <Link to="/checkout">
                    <button>CHECKOUT</button>
                    </Link>
                </>
              );
            }
          })()}
        </div>
      );
}

export default Cart;
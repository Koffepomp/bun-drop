import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import CartManager from '../managers/CartManager';

function Checkout() {

    const navigate = useNavigate();

    const [order, setOrder] = useState(CartManager.getOrder())
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const handlePaymentMethodChange = (event) => {setPaymentMethod(event.target.value);};
    const handleCardNumberChange = (event) => {setCardNumber(event.target.value);};
    const handleAddressChange = (event) => {setAddress(event.target.value);};
    const handleCityChange = (event) => {setCity(event.target.value);};

    function confirmOrder() {
        if (address.length == 0) {
            // ENTER ADDRESS
            console.log("Funkar fast adress är tom")
            return
        }
        else {
            console.log("Funkar")

            let orderData = {
                buyer: "Ragnar",
                time: 1,
                items: order,
            }
            console.log(orderData)
            CartManager.saveOrder(orderData)

            localStorage.clear();
            navigate('/confirmation')
            return
        };
    

    };

return (
    <div className="checkout-container">
        <h1>Choose a Payment Method:</h1>
        <label>
            <div className="checkout-payment-container" onClick={() => setPaymentMethod('swish')}>
                <input type="radio" name="paymentMethod" value="swish" onChange={handlePaymentMethodChange}/>
                <img src={require('../images/swish.png')}/>
            </div>
        </label>
        <label>
            <div className="checkout-payment-container" onClick={() => setPaymentMethod('mastercard')}>
                <input type="radio" name="paymentMethod" value="mastercard" onChange={handlePaymentMethodChange}/>
                <img src={require('../images/mastercard.png')}/>
            </div>
        </label>
        <label>
            <div className="checkout-payment-container" onClick={() => setPaymentMethod('gold')}>
                <input type="radio" name="paymentMethod" value="gold" onChange={handlePaymentMethodChange}/>
                <img src={require('../images/gold.png')}/>
                <p>WoW Gold</p>
            </div>
        </label>
        <div>
        <label>Card Number:
        <input type="text" value={cardNumber} onChange={handleCardNumberChange}/>
        </label>
    </div>
    <div>
        <label>Address:
        <input type="text" value={address} onChange={handleAddressChange}/>
        </label>
    </div>
    <div>
        <label>City:
        <input type="text" value={city} onChange={handleCityChange}/>
        </label>
    </div>
    <div>
        <button onClick={confirmOrder}>CONFIRM ORDER</button>
    </div>
    </div>
);
}

export default Checkout;
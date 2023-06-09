import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import CartManager from '../managers/CartManager';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Checkout() {

    const navigate = useNavigate();

    const [order, setOrder] = useState(CartManager.getOrder())
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentInfo, setPaymentInfo] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const handlePaymentMethodChange = (event) => {setPaymentMethod(event.target.value);};
    const handlePaymentInfoChange = (event) => {setPaymentInfo(event.target.value);};
    const handleAddressChange = (event) => {setAddress(event.target.value);};
    const handleCityChange = (event) => {setCity(event.target.value);};

    const getPaymentTextbox = () => {
        if (paymentMethod === 'swish') {
          return 'Phone number:';
        }
        else if (paymentMethod === 'mastercard') {
          return 'MasterCard number:';
        }
        else if (paymentMethod === 'gold') {
          return 'World of Warcraft Realm:';
        }
        return '';
      };

    function confirmOrder() {
        if (paymentMethod == "") {
            toast.error("Please choose a payment method!")
            return
        }
        if (paymentMethod == "swish" && paymentInfo.length != 10) {
            toast.error("Please enter a valid phone number!")
            return
        }
        if (paymentMethod == "mastercard" && paymentInfo.length != 16) {
            toast.error("Please enter a valid MasterCard! (16 digits)")
            return
        }
        if (paymentMethod == "gold" && paymentInfo.length == 0) {
            toast.error("Please enter a valid realm name!")
            return
        }
        if (address.length == 0) {
            toast.error("Please enter an address!")
            return
        }
        if (city.length == 0) {
            toast.error("Please enter a city name!")
            return
        }
        else {
            let orderData = {
                buyer: "Albin",
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
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
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
                <h4>WoW Gold</h4>
            </div>
        </label>
        <div>
            <label><p>{getPaymentTextbox()}</p>
            <input type="text" value={paymentInfo} onChange={handlePaymentInfoChange} disabled={!paymentMethod}/>
            </label>
        </div>
        <div>
            <label><p>Address:</p>
            <input type="text" value={address} onChange={handleAddressChange}/>
            </label>
        </div>
        <div>
            <label><p>City:</p>
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
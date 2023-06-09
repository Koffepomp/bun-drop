import CartManager from '../managers/CartManager'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Burger(burger) {

    function ClickedOnPlus()
    {
        toast.success(`${burger.name} has been added to the shopping cart!`)
        CartManager.AddToCart(burger)
    }

    return ( 
        <div className="content-container-burgers">
            <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
            <img className="burger-image" src={require(`../images/${burger.image}`)}/>
            <h3 className="white-text">{burger.name}</h3>
            <p className="white-text">{burger.description}</p>
            <p className="white-text">{burger.price} kr</p>

            <button onClick={ClickedOnPlus} className="plus-button">+</button>
        </div>
     );
}

export default Burger;
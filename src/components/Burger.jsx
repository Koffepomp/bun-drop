import PlusButton from '../images/plus.png'
import CartManager from '../managers/CartManager'

function Burger(burger) {

    function ClickedOnPlus()
    {
        CartManager.AddToCart(burger)
    }

    return ( 
        <div className="content-container-burgers">
            <img className="burger-image" src={require(`../images/${burger.image}`)}/>
            <h3 className="white-text">{burger.name}</h3>
            <p className="white-text">{burger.description}</p>
            <p className="white-text">{burger.price} kr</p>

            <img onClick={ClickedOnPlus} className="plus-button" src={PlusButton}/>
        </div>
     );
}

export default Burger;
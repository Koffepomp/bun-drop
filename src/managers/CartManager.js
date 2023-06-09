class CartManager {

    static EmptyCart() {
        let cart = []
        localStorage.setItem('cartItems', JSON.stringify(cart))
    }

    static LoadCart() {
        let cart = localStorage.getItem("cartItems")
        
        if (!cart) {
            return cart = []
        }

        cart = JSON.parse(cart)
        return cart;
    }

    static async AddToCartFromId(burgerId)
    {
        await fetch(`http://localhost:7000/burgers/${burgerId}`)
        .then((res) => res.json())
        .then((data) => {
            this.AddToCart(data)
        })
    }

    static async RemoveFromCartFromId(burgerId)
    {
        await fetch(`http://localhost:7000/burgers/${burgerId}`)
        .then((res) => res.json())
        .then((data) => {
            this.RemoveFromCart(data)
        })
    }

    static AddToCart(newBurger) {

        let cart = this.LoadCart()

        if (this.IsBurgerAlreadyInCart(newBurger, cart)) {
            console.log(newBurger.name + " fanns redan, +1 quantity")
        }
        else {
            cart.push(newBurger)
            console.log("Added " + newBurger.name)
        }

        localStorage.setItem("cartItems", JSON.stringify(cart))
        
        console.log(cart)
    }

    static RemoveFromCart(removeBurger) {
        let cart = this.LoadCart()

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === removeBurger.id) {
                if (cart[i].quantity > 1) {
                    cart[i].quantity--;
                    console.log("-1 burgare dårå")
                }
                else {
                    cart.splice(i, 1)
                    console.log("Gick till 0 quantity, tar bort!")
                }
                localStorage.setItem("cartItems", JSON.stringify(cart))
            }
        }
        console.log(cart)
    }

    static IsBurgerAlreadyInCart(newBurger, cart) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === newBurger.id) {
                cart[i].quantity++;
                return true;
            }
        }
        return false;
    }

    static getOrder() {
        let order = localStorage.getItem("cartItems")
        order = JSON.parse(order)
        return order;
    }

    static saveOrder(orderData)
    {
        fetch('http://localhost:7000/orders', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData)
        })
    }
}

export default CartManager
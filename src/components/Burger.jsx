function Burger(burger) {
    return ( 
        <div>
            <h1>{burger.name}</h1>
            <h3>{burger.price}</h3>
            <img src={require(`../images/${burger.image}`)}/>
        </div>
     );
}

export default Burger;
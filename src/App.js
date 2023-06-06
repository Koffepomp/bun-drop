import './App.css';
import Logo from './images/logo.png'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Confirmation from './pages/Confirmation'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="all-content">
      <div className="navbar">
        <img className="logo-image" src={ Logo } />
        <Link to="/home">
        <button>Start</button>
        </Link>
        <Link to="/menu">
        <button>Menu</button>
        </Link>
        <Link to="/cart">
        <button>Cart</button>
        </Link>
      </div>
      <Routes>

      <Route path="/" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="menu" element={<Menu/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="checkout" element={<Checkout/>}/>
      <Route path="confirmation" element={<Confirmation/>}/>
      <Route path="*" element={<NotFound/>}/>

      </Routes>
      <div className="footer">Copyright 2023 © Christopher Nordahl</div>
    </div>
  );
}

export default App;

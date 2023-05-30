import './App.css';
import { Routes, Route } from 'react-router-dom'
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
    <div>
      <div className="navbar">Navbar</div>
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
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;

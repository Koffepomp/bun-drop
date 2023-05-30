import './App.css';
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <div>Navbar</div>
      <Routes>

      <Route
      path="/"
      element={<div>HOME</div>}/>

      <Route
      path="*"
      element={<NotFound/>}/>

      </Routes>
      <div>Footer</div>
    </div>
  );
}

export default App;

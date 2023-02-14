
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Shop from "./Shop";
import Order from "./Order";
import About from "./About";
import Home from "./Home";


function App() {
  return(
    <div className='container'>
  <Router>
    <nav className='App'>
      <Link to="/home" className='link'>Home</Link>
      <Link to = "/shop" className='link'>Shop</Link>
      <Link to = "/order" className='link'>Order</Link>
      <Link to = "/about" className='link'>About</Link>
    </nav>

    <Routes>
      <Route path="/home"/>
      <Route path="/shop" element={<Shop />} />
      <Route path="/order" element={<Order />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </Router>

    <div>
      <Home/>
    </div>
</div>
)
}

export default App;

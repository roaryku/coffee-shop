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
    <div>
  <Router>
    <nav className='App'>
      <Link path to='/home' className='link shop'>Home</Link>
      <Link path to = '/shop' className='link shop'>Menu</Link>
      <Link path to = '/order' className='link shop'>Order</Link>
      <Link path to = '/about' className='link shop'>About</Link>
    </nav>

    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/shop' element={<Shop />} />
      <Route path='/order' element={<Order />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </Router>
</div>
)
}

export default App;

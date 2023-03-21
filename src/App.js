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
      <Link to ='/' className='link shop'>Home</Link>
      <Link to = '/shop' className='link shop'>Menu</Link>
      <Link to = '/order' className='link shop'>Order</Link>
      <Link to = '/about' className='link shop'>About</Link>
    </nav>

    <Routes>
      <Route path = '/' element={<Home />}/>
      <Route path = '/shop' element={<Shop />} />
      <Route path = '/order' element={<Order />} />
      <Route path = '/about' element={<About />} />
    </Routes>
    </Router>
</div>
)
}

export default App;

import React from 'react' 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Contact from './components/Contact';
import Home from './components/Home'
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

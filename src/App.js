import React from 'react' 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Contact from './components/Contact';
import Home from './components/Home'
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/About';
import Delivery from './components/Delivery';
import Recipes from './components/Recipes';
import Faq from './components/Faq';
import Bundles from './components/Bundles';
import Gifting from './components/Gifting';
import Quality from './components/Quality';
import { Toaster } from 'react-hot-toast';

function App() {
  const basename = process.env.PUBLIC_URL || '/';

  return (
    <Router basename={basename}>
      <Toaster position="top-center" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/bundles" element={<Bundles />} />
        <Route path="/gifting" element={<Gifting />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

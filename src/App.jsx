import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';
import Home from './pages/home/Home';
import ProductsList from './features/products/ProductsList';
import Footer from './components/footer/Footer';
import Wishlist from './pages/whishlist/Whishlist';
import Single from './pages/single/ProductDetails';  // Import the Single component

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<Single />} />  // Add the route for Single
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Wishlist from './pages/whishlist/Whishlist';
import Single from './pages/single/ProductDetails';
import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart'; 

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<Single />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} /> {/* Added Cart route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

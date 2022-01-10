import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Nav, ShoppingBasket, UserPanel, Menu, OurStory, ContactUs, Footer, Login } from './component';

const Layout = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/user-panel" element={<UserPanel />} />
          <Route path="/shopping-basket" element={<ShoppingBasket />} />
          <Route path="/home" element={<Header />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Layout;

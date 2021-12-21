import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Header, Nav, Menu, OurStory, ContactUs, Footer  } from './component';

const Layout = () => {
  return (
    <>
      <Router>
      <Nav/>
      <Routes>
      <Route path="/home" element={<Header/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/story" element={<OurStory/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default Layout;

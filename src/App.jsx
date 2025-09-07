import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
              <Route path='/' element={<Home></Home>}>Home</Route>
              <Route path='/home' element={<Home></Home>}>Home</Route>
              <Route path='/shop' element={<Shop></Shop>}>Shop</Route>
              <Route path='/contact' element={<Contact></Contact>}>Contact</Route>
              <Route path='/about' element={<About></About>}>Home</Route>
          </Routes>
          <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
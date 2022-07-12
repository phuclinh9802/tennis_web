import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Contact from './pages/contact';
import Course from './pages/course';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/course' element={<Course />} />
        </Routes>
        <Footer />

      </Router>
    </>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Contact from './pages/contact';
import Course from './pages/course';
import Teams from './pages/team';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/course' element={<Course />} />
          <Route path='/team' element={<Teams />} />
        </Routes>
        <Footer />

      </Router>
    </>
  );
}

export default App;

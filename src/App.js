
import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Reviews from './pages/Reviews/Reviews';
import Login from './pages/Login/Login';
import Footer from './pages/Shared/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

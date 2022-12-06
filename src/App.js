import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

function App() {
  return (
    <>
   <Router>
    <Header/>
    <Routes>

      <Route path='/' element={<HeroSection/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
   </Router>
   </>
  );
}

export default App;

  
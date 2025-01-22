import React from 'react';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className='App'>
      <Navbar />
   
      <div id="home">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="Experience">
        <Experience/>
      </div>
      <div id='portfolio'>
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;

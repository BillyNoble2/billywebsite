import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Projects from './Projects';
import {useState} from 'react';

function App() {

  return (
    <div>
    <div className="Header">
      <NavBar />
    </div>
    <div className="line"></div>
    <div className = "Body">
      <AboutMe />
      <div className="line"></div>
      <Projects />
      <div className="line"></div>
      <ContactMe />
    </div>
    </div>
  );
}

export default App;

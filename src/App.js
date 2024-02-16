import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import {useState} from 'react';

function App() {

  return (
    <div>
    <div className="Header">
      <NavBar />
    </div>
    <div className = "Body">
      <AboutMe />
      <ContactMe />
    </div>
    </div>
  );
}

export default App;

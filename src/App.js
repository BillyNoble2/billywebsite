import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import AboutMe from './AboutMe';

function App() {
  return (
    <div>
    <div className="Header">
      <NavBar />
    </div>
    <div className = "Body">
      <AboutMe />
    </div>
    </div>
  );
}

export default App;

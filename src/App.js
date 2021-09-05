import logo from './logo.svg';
import './App.css';
import About from './main-components/about/About';
import Nav from './nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          First React website for Anton Arbus
        </p>
      </header>
      
      <About />
    </div>
  );
}

export default App;
import NavBar from './components/NavBar';
import CurrentlyReading from './components/currentlyReading';
import Footer from './components/Footer';
import Books from './components/books.js';
import './App.css';
import logo from "./resources/stack-of-books.png";
import uparrow from "./resources/up-arrow.png";

function App() {
  return (
    <div className="App">
      <NavBar logo={logo}/>
      <CurrentlyReading logo={logo} title="Meditation on Violence" author="Rory Miller" isbn="9781594391187" prog="40"/>
        <Books logo={logo}/>
        <div id="up"><a href='#current'><img src={uparrow} alt='Return to Top'/></a></div>
        <Footer/>
    </div>
  );
}

export default App;

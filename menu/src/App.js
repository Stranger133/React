import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import All from './All';
import Burgers from './Burgers';
import Sandwiches from './Sandwiches';
import Pizza from './Pizza';
import Salads from './Salads';
import Beverages from './Beverages';
import Footer from './Footer';


function App() {
  const styles = {
    textDecoration: 'none',
    color: 'white',
  }
  return (
    <>
      <nav>
        <ul id='nav-items'>
          <li><Link style={styles} to="/burgers">Burgers</Link></li>
          <li><Link style={styles} to="/sandwiches">Sandwiches</Link></li>
          <li><Link style={styles} to="/pizza">Pizza</Link></li>
          <li><Link style={styles} to="/salads">Salads</Link></li>
          <li><Link style={styles} to="/beverages">Beverages</Link></li>
          <li><Link style={styles} to="/">All</Link></li>
        </ul>
      </nav>
      <div id="body">
        <Routes>
          <Route path='/' element={<All/>}/>
          <Route path='/burgers' element={<Burgers/>}/>
          <Route path='/sandwiches' element={<Sandwiches/>}/>
          <Route path='/pizza' element={<Pizza/>}/>
          <Route path='/salads' element={<Salads/>}/>
          <Route path='/beverages' element={<Beverages/>}/>
        </Routes>
      </div>
      <div id='footer'>
        <Footer/>
      </div>
    </>
  );
}

export default App;

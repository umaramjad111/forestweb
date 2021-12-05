import logo from './logo.svg';
import './App.css';

import Home from './Mycomponents/Home';
import About from './Mycomponents/About';
import Services from './Mycomponents/Services';
import Gallary from './Mycomponents/Gallary';
import Contact from './Mycomponents/Contact';
import Footer from './Mycomponents/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      
      <Route exact path="/" component={Home}/>
      {/* <Route exact path="#about" component={About}/>
      <Route exact path="#services" component={Services}/>
      <Route exact path="#gallary" component={Gallary}/>
      <Route exact path="#contact" component={Contact}/> */}
      {/* <About/>
      <Services/>
      <Gallary/>
      <Contact/> */}
      <Footer/>
      </Router>
    </div>
  );
}

export default App;

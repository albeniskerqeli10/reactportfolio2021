import './App.scss';
import React  from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
<div className="App__Container">
<Router>

  <Header/>
  <Switch>
<Route exact path="/" component={Home}/>
<Route  path="/about" component={About}/>

  </Switch>
  <Contact/>

  </Router>
</div>
    </div>
  );
}

export default App;

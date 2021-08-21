import './App.scss';
import React, { Suspense }  from 'react';
import Header from './components/Header';

import Contact from './components/Contact';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home')); // Lazy-loaded
const About = React.lazy(() => import('./pages/About')); // Lazy-loaded


function App() {
  return (
    <Suspense fallback={null}>
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
    </Suspense>
  );
}

export default App;

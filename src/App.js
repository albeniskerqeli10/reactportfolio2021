import './App.scss';
import React  from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
<div className="App__Container">
  <Header/>
  
  <Hero/>
  <Projects/>
</div>
    </div>
  );
}

export default App;

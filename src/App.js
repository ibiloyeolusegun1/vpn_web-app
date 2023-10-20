import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Stat from './components/Stat/Stat';

function App() {
  return (
    <div className='App'>
       <Header/>
       <Hero/>
       <Stat/>
    </div>
  );
}

export default App;

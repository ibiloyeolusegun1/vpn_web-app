import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Stat from './components/Stat/Stat';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Customer from './components/Customer/Customer';

function App() {
  return (
    <div className='App'>
       <Header/>
       <Hero/>
       <Stat/>
       <Features/>
       <Pricing/>
       <Customer/>
    </div>
  );
}

export default App;

import React from 'react';

import Main from './components/Main/jsx/Main'
import About from './components/About/jsx/Main'
import Work from './components/Works/jsx/Work'
import Contact from './components/Contact/jsx/Contact'
import Footer from "./components/Footer/jsx/Footer";
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Main/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;

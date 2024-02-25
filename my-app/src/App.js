import './App.css';
import Header from './components/Header';
import MainPage from './components/mainPage';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import MySQL from './components/MySQL';

function App() {

  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
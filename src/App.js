import './App.css';
import React, { useState } from 'react'
import FunctionAPI from './Component/API/FuncionAPI';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Nav from './Component/Nav';
import Header from './Component/Header';
import Footer from './Component/Footer';
function App() {
 
  return (
    <>
     <Header/>
     <FunctionAPI>
     <Nav/>
       </FunctionAPI>
    <Footer/>
      </>
    
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home';
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Components/Home/Services/Services';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

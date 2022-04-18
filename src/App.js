import React from 'react';
import './App.css';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home';
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Components/Home/Services/Services';
import Blog from './Components/Blog/Blog';
import Portfolio from './Components/Portfolio/Portfolio';
import AboutMe from './Components/AboutMe/AboutMe';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

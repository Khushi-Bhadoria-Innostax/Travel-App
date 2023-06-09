import './App.css';
import React from "react";
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/home';
import Main from './Components/Main/main';
import Footer from './Components/Footer/footer';
import Login from './Components/Login-Signup/Login/login'

const App=()=>{
  return(
    <>
    <Navbar/>
    <Home/>
    <Main />
    <Footer />

    <Routes>
     <Route path='/login' Component={Login}></Route>
    </Routes>
     
  
    </>

  )
}
export default App;

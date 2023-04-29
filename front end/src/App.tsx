import React from 'react';
import './App.css';
import Routing from './component/Routing';
import Navbar from './component/Navbar';
import { current } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import NavbarHome from './component/NavbarHome';
import NavbarUser from './component/NavbarUser';

function App() {
  
  const currenuser = useSelector((state: RootState) => state.userReducer.currentUser);
  return (
    <div className="App">
  {/* הכללי */}
  <>{console.log("currenuser ", currenuser)}</>
  
     {/* <>{console.log(currenuser)}</> */}
     {currenuser.status==1?
      <NavbarUser></NavbarUser>:
      currenuser.status==2?
      <Navbar></Navbar>:
      <NavbarHome></NavbarHome>}
      {/* מנהל  */}
      {/* <Navbar></Navbar> */}
      {/* משתמש */}
      {/* <NavbarUser></NavbarUser> */}
      <Routing></Routing>
    </div>
  );
}

export default App;

import React from 'react';
import { Carousel, Menu } from 'antd';
import { Link, NavLink, Outlet } from 'react-router-dom';
// import Mainpage from './components/Mainpage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Just from './components/just';
// import Just from './components/Just';
const contentStyle = {
  // height: '100%',
  // color: '#fff',
  // lineHeight: '',
  // textAlign: 'center',
  background: '#364d79',
};


const App = () => (
  <div className='bg-black'>

    <Navbar />

    <Outlet />
    
    <Footer />

  </div>
);
export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Components/Navigation/Navigation'
// import Carousel from './Components/Carousel/Carousel'
import Footer from './Components/Footer/Footer'



ReactDOM.render(
  <>
    <Navigation/>
    {/* <Carousel/> */}
    <Footer/>
  </>,
  document.getElementById('root')
);
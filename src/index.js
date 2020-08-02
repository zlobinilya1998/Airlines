import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'



ReactDOM.render(
  <>
    <Navigation/>
    <Footer/>

  </>,
  document.getElementById('root')
);
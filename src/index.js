import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Components/Navigation/Navigation'
import Test from './Components/Test/Test'



ReactDOM.render(
  <>
    <Navigation/>
    <Test/>

  </>,
  document.getElementById('root')
);
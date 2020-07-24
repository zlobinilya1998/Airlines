import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js';
import Main from './main/main';
import Container from './Flight/Container';


ReactDOM.render(
  <>

    <App/>
    <Main/>
    {/* <Container/> */}


  </>,
  document.getElementById('root')
);
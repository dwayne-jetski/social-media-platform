import logo from './logo.svg';
import LandingPage from './components/LandingPage/landingPage';
import './App.css';
import React, { useState, useEffect } from 'react';
import CreateAccount from './components/CreateAccountPage/createAccount'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/navBar'

function App() {

  const [ renderedPage, useRenderedPage ] = useState('landingPage')

  

    if(renderedPage === 'landingPage'){
      return (
        <div className="App">
            <NavBar 
            renderedPage = {renderedPage}
            useRenderedPage = {useRenderedPage}
            />
            <LandingPage />
            <CreateAccount/>
         </div>
      );
    } else if (renderedPage === 'createAccount') {

      return (
        <div className="App">
            <NavBar 
            renderedPage = {renderedPage}
            useRenderedPage = {useRenderedPage}
            />
            <LandingPage />
            <CreateAccount/>
         </div>
      );

    }


  
}

export default App;

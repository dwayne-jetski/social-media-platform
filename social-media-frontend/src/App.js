import logo from './logo.svg';
import LandingPage from './components/LandingPage/landingPage';
import './App.css';
import React, { useState, useEffect } from 'react';
import CreateAccount from './components/CreateAccountPage/createAccount'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/navBar'
import UserProfile from './components/UserProfile/userProfile.jsx';
import MainPage from './components/mainPage/mainPage'

function App() {

  return(
    <div>
      <NavBar/>
      <MainPage/>
    </div>
  )
  /*const [ renderedPage, useRenderedPage ] = useState('landingPage')

  console.log("app.js renderedPage",renderedPage)

  if(renderedPage === 'landingPage'){
    console.log("WORKED!: ",renderedPage)
    return (
      <div className="App">
          <NavBar 
          renderedPage = {renderedPage}
          useRenderedPage = {useRenderedPage}
          />
          <LandingPage 
          renderedPage = {renderedPage}
          useRenderedPage = {useRenderedPage}
          />
        </div>
    );
  } else if (renderedPage === 'createAccount') {
    console.log("WORKED!: ",renderedPage)
    return (
      <div className="App">
          <NavBar 
          renderedPage = {renderedPage}
          useRenderedPage = {useRenderedPage}
          />
          <CreateAccount
          renderedPage = {renderedPage}
          useRenderedPage = {useRenderedPage}
          />
      </div>
    );
  } else if (renderedPage === 'profilePage'){
    console.log("WORKED!: ",renderedPage)
    return (
      <div className="App">
          <NavBar 
          renderedPage = {renderedPage}
          useRenderedPage = {useRenderedPage}
          />
          <UserProfile
          renderedPage = {renderedPage}
          useRenderedPage = {useRenderedPage}
          />
      </div>
    );
  }*/
}

export default App;
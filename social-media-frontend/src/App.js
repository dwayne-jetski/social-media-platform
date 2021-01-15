import logo from './logo.svg';
import LandingPage from './components/LandingPage/landingPage';
import './App.css';
import React from 'react';
import CreateAccount from './components/CreateAccountPage/createAccount'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/navBar'
import UserProfile from './components/UserProfile/userProfile.jsx';


function App() {
  return (
    <div className="App">

      <NavBar/>
      <UserProfile/>
    
    </div>
  );
}

export default App;

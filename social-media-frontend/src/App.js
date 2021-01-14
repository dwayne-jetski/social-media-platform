import logo from './logo.svg';
import './App.css';
import React from 'react';
import CreateAccount from './components/CreateAccountPage/createAccount'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/navBar'


function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <CreateAccount/>
    </React.Fragment>
  );
}

export default App;

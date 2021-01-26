import logo from './logo.svg';
import LandingPage from './components/LandingPage/landingPage';
import './App.css';
import React, { useState, useEffect } from 'react';
import CreateAccount from './components/CreateAccountPage/createAccount'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/navBar'
import UserProfile from './components/UserProfile/userProfile.jsx';
import Footer from './components/Footer/Footer';
import DisplayUsers from './components/DisplayUsers/DisplayUsers';
import MainPage from './components/mainPage/mainPage'
import { Provider } from 'react-redux';

function App() {

  const [ renderedPage, useRenderedPage ] = useState('landingPage');
  const [ getUsers, useGetUsers ] = useState(null);

  const [ currentUser, useCurrentUser] = useState(null);

  console.log("app.js renderedPage",renderedPage)

  if(renderedPage === 'landingPage' || renderedPage === 'mainPage'){

    if(currentUser !== null){
        return (
          <div className="App">
              <NavBar 
              renderedPage = {renderedPage}
              useRenderedPage = {useRenderedPage}
              useCurrentUser = {useCurrentUser}
              currentUser = {currentUser}
              />
              <MainPage
              renderedPage = {renderedPage}
              useRenderedPage = {useRenderedPage}
              useCurrentUser = {useCurrentUser}
              currentUser = {currentUser}
              getUsers = {getUsers}
              useGetUsers = {useGetUsers}
              />
              <Footer/>
          </div>            
        )
      } else { 
        return (
        <div className="App">
            <NavBar 
            renderedPage = {renderedPage}
            useRenderedPage = {useRenderedPage}
            useCurrentUser = {useCurrentUser}
            currentUser = {currentUser}
            />
            <LandingPage 
            renderedPage = {renderedPage}
            useRenderedPage = {useRenderedPage}
            useCurrentUser = {useCurrentUser}
            currentUser = {currentUser}
            />
            <Footer/>
          </div>
          );
  }
  } else if (renderedPage === 'createAccount') {
    console.log("WORKED!: ",renderedPage)
    return (
      <div className="App">
          <NavBar 
          renderedPage = {renderedPage}
          useRenderedPage = {useRenderedPage}
          useCurrentUser = {useCurrentUser}
          currentUser = {currentUser}
          />
          <CreateAccount
          renderedPage = {renderedPage}
          useRenderedPage = {useRenderedPage}
          useCurrentUser = {useCurrentUser}
          currentUser = {currentUser}
          />
          <Footer/>
      </div>
    );
  } else if (renderedPage === 'profilePage'){
    console.log("WORKED!: ",renderedPage)
    return (
      <div className="App">
          <NavBar 
          renderedPage = {renderedPage}
          useRenderedPage = {useRenderedPage}
          useCurrentUser = {useCurrentUser}
          currentUser = {currentUser}
          />
          <UserProfile
          renderedPage = {renderedPage}
          useRenderedPage = {useRenderedPage}
          useCurrentUser = {useCurrentUser}
          currentUser = {currentUser}
          />
          <Footer/>
      </div>
    );
  } else if (renderedPage === 'displayUsers'){
    console.log("WORKED!: ",renderedPage)
    return (
      <div className="App">
          <NavBar 
          renderedPage = {renderedPage}
          useRenderedPage = {useRenderedPage}
          useCurrentUser = {useCurrentUser}
          currentUser = {currentUser}
          />
          <DisplayUsers
          renderedPage = {renderedPage}
          useRenderedPage = {useRenderedPage}
          useCurrentUser = {useCurrentUser}
          currentUser = {currentUser}
          getUsers = {getUsers}
          useGetUsers = {useGetUsers}
          />
          <Footer/>
      </div>
    );
  } else if (renderedPage === 'mainPage'){
      console.log("WORKED!: ",renderedPage)
      return (
        <div className="App">
            <NavBar 
            renderedPage = {renderedPage}
            useRenderedPage = {useRenderedPage}
            useCurrentUser = {useCurrentUser}
            currentUser = {currentUser}
            />
            <MainPage
            renderedPage = {renderedPage}
            useRenderedPage = {useRenderedPage}
            useCurrentUser = {useCurrentUser}
            currentUser = {currentUser}
            getUsers = {getUsers}
            useGetUsers = {useGetUsers}
            />
            <Footer/>
        </div>
      );
  }
}

export default App;
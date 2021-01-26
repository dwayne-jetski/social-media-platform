import React, { useState, useEffect } from 'react';
import 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form';
import {Col, Row} from 'react-bootstrap';
import useForm from '../useForm/useForm';
import NavLink from 'react-bootstrap/NavLink';
import './navBar.css';
import DisplayUsers from '../DisplayUsers/DisplayUsers';
import axios from 'axios';



function NavBar(props){

    const handleClick = (name) => {
        console.log(name);
        props.useRenderedPage(name);
    }

    const search = () =>{
        console.log("Search Result: ", values.search);
        props.useRenderedPage('displayUsers');
    }
    
    const handleLogout = () => {

        if(props.currentUser === null){
            return
        }
        
        if (props.currentUer !== null){
        console.log("Before: ", props.currentUser)
        props.useCurrentUser(null)
        console.log("After: ", props.currentUser);
        props.useRenderedPage('landingPage')
        }

    }


    const { values, handleChange, handleSubmit, } = useForm(search)


    return(
        <React.Fragment>
            <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" onClick={()=>handleClick('landingPage')} name="landingPage" href="#home">MusicApp</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" onClick={()=>handleClick('landingPage')} name="landingPage" href="#home">Home<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" onClick={()=>handleClick('createAccount')} name="createAccount" href="#createaccount">Sign up</ NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" onClick={()=>handleClick('profilePage')} name="createAccount" href="#profile">Profile Page</ NavLink>
                    </li>
                    </ul>
                </div>
                <div>
                    <Form className="search" onSubmit={handleSubmit}>
                        <Button className="search-button" type="Submit">See Other Users</Button>
                    </Form>
                </div>
                <div>
                    <Button className="search-button" onClick={handleLogout}>Logout</Button>
                </div>
            </Navbar>
        </React.Fragment>
    );
}


export default NavBar;

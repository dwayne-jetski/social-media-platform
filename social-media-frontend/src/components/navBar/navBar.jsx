import React, { useState, useEffect } from 'react';
import 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form';
import {Col, Row} from 'react-bootstrap';
import useForm from '../useForm/useForm';
import NavLink from 'react-bootstrap/NavLink'


function NavBar(props){

    const [ currentPage, setCurrentPage ] = useState('landingPage')

    const changePage = (props) =>{
        
    }

    const handleClick = (name) => {
        console.log(name)
        setCurrentPage(name)

        if (currentPage === 'landingPage'){
            console.log("currentPage: ", currentPage);
            props.useRenderedPage('landingPage');
            console.log("props.renderedPage: ", props.renderedPage);
            console.log('----newRender-------')
        } else if (currentPage === 'createAccount'){
            console.log("currentPage: ", currentPage);
            props.useRenderedPage('createAccount');
            console.log("props.renderedPage: ", props.renderedPage);
            console.log('----newRender-------')
        }

    }

    return(
        <React.Fragment>
            <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" onClick={()=>handleClick('landingPage')} name="landingPage" href="#">MusicApp</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" onClick={()=>handleClick('landingPage')} name="landingPage" href="#">Home<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" onClick={()=>handleClick('createAccount')} name="createAccount" href="#">Sign up</ NavLink>
                    </li>
                    </ul>
                </div>
            </Navbar>
        </React.Fragment>
    );
}


export default NavBar;

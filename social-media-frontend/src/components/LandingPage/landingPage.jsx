import React, { useState, useEffect} from 'react';
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from 'jwt-decode';
import './landingPage.css';
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {Col, Row} from 'react-bootstrap';
import useForm from '../useForm/useForm';
import axios from 'axios';




const LandingPage = (props) => {

    const login = () => {

        console.log('Email: ', values.email);

        const loginCredentials = {
            email: values.email,
            password: values.password
        }

        console.log(loginCredentials);

        axios.post('http://localhost:5000/api/userInfo/login', loginCredentials)
        .then(res => {
            
            const { token } = res.data;
            console.log(token);
            localStorage.setItem('jwtToken', token);
            //set token to Auth header
            setAuthToken(token);
            //decode to get user data
            const decode = jwt_decode(token);
            props.useCurrentUser(decode);
            console.log(props.currentUser);
        })
        .catch(err =>
            console.log(err));

    }

    const handleClick = (name) => {
        console.log(name);
        props.useRenderedPage(name);
    }


    const { values, handleChange, handleSubmit } = useForm(login);


    return(
        <React.Fragment>
            <Row className="jumbotron">
                <Col>
                    <div>
                        <h1 className="display-4">Welcome to MusicApp.</h1>                                          
                        <p>Log in now to start sharing your favorite tunes!</p>
                        <br/>
                    </div>
                    <Row>
                        <Form className="sign_in_Form container" onSubmit={()=>login()}>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control className="m-1" type="email" placeholder="Enter email" name="email" onChange={handleChange} value={values.email} required={true}/>
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="m-1" type="password" placeholder="Enter password" name="password" onChange={handleChange} value={values.password} required={true}/>
                            <br/>
                            <Button variant="outline-primary" type="submit">Log In</Button>
                        </Form>
                    </Row>
                        <span className="or">or</span>
                        <Button onClick={()=>{handleClick('createAccount')}} variant="outline-primary">Create Account</Button>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default LandingPage;
import React, { useState, useEffect} from 'react';
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

        axios.get('http://localhost:5000/api/userInfo/', loginCredentials)

        let password = true //will eventually be a statement to test whether or not the password works
        console.log('in')
        if(password === true){
            props.useRenderedPage('profilePage');
            console.log('IN! renderPage: ', props.renderedPage);
        };

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
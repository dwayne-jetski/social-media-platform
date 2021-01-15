import React, { useState, useEffect} from 'react';
import './landingPage.css';
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {Col, Row} from 'react-bootstrap';
import useForm from '../useForm/useForm';




const LandingPage = () => {

    const login = () => {

        console.log('Email: ', values.email)

    }

    const { values, handleChange, handleSubmit } = useForm(login);


    return(
        <React.Fragment>
            <Row className="jumbotron">
                <Col>
                    <div>
                        <h1 className="display-4">Welcome to MusicApp!</h1>                        
                        <p className="lead">Connect with other music enthusiasts like yourself.</p>                   
                        <p>Log in now to start sharing your favorite tunes.</p>
                        <br/>
                    </div>
                    <Row>
                        <Form className="sign_in_Form container">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control className="m-1" type="email" placeholder="Enter email" name="email" onChange={handleChange} value={values.email} required={true}/>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" name="password" onChange={handleChange} value={values.password} required={true}/>
                            <br/>
                            <Button type="submit">Log In</Button>
                        </Form>
                    </Row>
                    <div>
                        <br/>
                        <span className="or">or</span>
                        <Button>Create Account</Button>
                    </div>
                </Col>
            </Row>
            
            <footer class="py-3 bg-light">
            <div class="container">
                <p class="text-center">Copyright &copy; MusicApp 2021</p>
            </div>
            </footer>
        </React.Fragment>
    )
}

export default LandingPage;
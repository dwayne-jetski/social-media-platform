import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'

import Form from 'react-bootstrap/Form';
import {Col, Row} from 'react-bootstrap';
import useForm from '../useForm/useForm';


function CreateAccount(){    

    const register = (textColor) =>{
        console.log("Email: ", values.email);
        console.log("User Name: ", values.userName);
        console.log('First Name: ', values.firstName);
        console.log('Last Name: ', values.lastName);
        console.log("Password: ", values.password);
        console.log("Password Confirmation: ", values.confirmPassword);

        if(values.password === values.confirmPassword){
            alert(`Thanks for registering! Check your email ${values.email} for confirmation`);            
        } else if(values.pasword !== values.confirmPassword){
            alert('your passwords do not match')
           
        }

    }

    const {values, handleChange, handleSubmit } = useForm(register);

    return(
        <React.Fragment>
            <Row className="jumbotron" >
                <Col xs={3} />
                <Col xs={6} className="create_account_form"> 
                    
                    <Col >               
                        <Form onSubmit={handleSubmit}>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} value={values.email} required={true}/>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" name="userName" onChange={handleChange} value={values.userName} required={true}/>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="firstName" placeholder="Enter first name" name="firstName" onChange={handleChange} value={values.firstName} required={true}/>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="lastName" placeholder="Enter last name" name="lastName" onChange={handleChange} value={values.lastName} required={true}/>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password 8-32 characters long" name="password" onChange={handleChange} value={values.password} required={true}/>
                            <Form.Label className={values.textColor}>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm your password" name="confirmPassword" onChange={handleChange} value={values.confirmPassword} required={true}/>
                            <Button type="submit">Register</Button>
                        </Form>
                    </Col>
                </Col>
            </Row>
        </React.Fragment>
            
            
        
    );
}


export default CreateAccount;

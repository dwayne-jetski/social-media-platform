import React, { useState, useEffect } from 'react';
import 'react-bootstrap';
import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form';
import {Col, Row} from 'react-bootstrap';


function NavBar(){





    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Col xs={5}/>            
                <Col xs={4}>
                    <Navbar.Brand href="#home">MusicApp</Navbar.Brand>
                </Col>
                <Col>    
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Col>
            </Navbar>
        </div>
    );
}


export default NavBar;

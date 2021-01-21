import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from  'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './DisplayUsers.css';


function DisplayUsers() {

    return(
        <React.Fragment>
            <Row className='background'>
                <Col/>

                <Col>
                   <Card className='card-background'>
                        <Col>
                            <Card.Img variant='left' className="image-size" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/31445027_1351262364973978_1562260608361955328_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=xeMMpwJ5Ae4AX8S6-wJ&_nc_ht=scontent-ort2-1.xx&oh=9851c643836c864e1eced194d50b9421&oe=602DA833" roundCircle/>
                        </Col>
                        <Col>
                            <Card.Header>Marcus Baumgardner</Card.Header>
                        </Col>
                        <Col>
                            <Button variant="outline-primary">Add Friend</Button>
                        </Col>
                   </Card>
                   <Card className='card-background'>
                        <Col>
                            <Card.Img variant='left' className="image-size" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/31445027_1351262364973978_1562260608361955328_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=xeMMpwJ5Ae4AX8S6-wJ&_nc_ht=scontent-ort2-1.xx&oh=9851c643836c864e1eced194d50b9421&oe=602DA833" roundCircle/>
                        </Col>
                        <Col>
                            <Card.Header>Not Marcus Baumgardner</Card.Header>
                        </Col>
                        <Col>
                            <Button variant="outline-primary">Add Friend</Button>
                        </Col>
                   </Card>
                   <Card className='card-background'>
                        <Col>
                            <Card.Img variant='left' className="image-size" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/31445027_1351262364973978_1562260608361955328_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=xeMMpwJ5Ae4AX8S6-wJ&_nc_ht=scontent-ort2-1.xx&oh=9851c643836c864e1eced194d50b9421&oe=602DA833" roundCircle/>
                        </Col>
                        <Col>
                            <Card.Header>Definitely Not Marcus Baumgardner</Card.Header>
                        </Col>
                        <Col>
                            <Button variant="outline-primary">Add Friend</Button>
                        </Col>
                   </Card>
                   <Card className='card-background'>
                        <Col>
                            <Card.Img variant='left' className="image-size" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/31445027_1351262364973978_1562260608361955328_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=xeMMpwJ5Ae4AX8S6-wJ&_nc_ht=scontent-ort2-1.xx&oh=9851c643836c864e1eced194d50b9421&oe=602DA833" roundCircle/>
                        </Col>
                        <Col>
                            <Card.Header>Absolutely Not Marcus Baumgardner</Card.Header>
                        </Col>
                        <Col>
                            <Button variant="outline-primary">Add Friend</Button>
                        </Col>
                   </Card>
                </Col>

                <Col/>   
            </Row>


        </React.Fragment>
    )
}

export default DisplayUsers;
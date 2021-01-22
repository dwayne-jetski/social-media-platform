import React from 'react';
import Card from  'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './userProfile.css';

const UserProfile = () => {
    return(
        <React.Fragment>  
            <Row className="profile background">
                <Col xs={1}></Col>
                <Col>
                    <Card className="background box_shadow" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <div className="container m-1 text_color">
                        <Card.Title>MUSICUSER17</Card.Title>
                        <Card.Text>
                        Member since 2021
                        </Card.Text>
                        </div>
                        <br/>
                        <ListGroup variant="flush">
                            <Card.Title className="m-4 text_color">MUSICAL INTERESTS:</Card.Title>
                            <ListGroup.Item className="list_items">Rap</ListGroup.Item>
                            <ListGroup.Item className="list_items">RnB</ListGroup.Item>
                            <ListGroup.Item className="list_items">Punk Rock</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs={.5}/>
                
                <Col xs={6} className="center">
                    <Row>
                        <Card className="bio">
                            <Card.Header>ABOUT ME</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente tempora labore beatae blanditiis ex id sed tenetur laudantium incidunt minus consequuntur nulla nihil provident magni, mollitia laboriosam eaque neque veniam!
                                </Card.Text>
                                <Card.Title>Check out my playlist:</Card.Title>
                            </Card.Body>
                            <div>
                            <iframe src="https://open.spotify.com/embed/album/52XjGg0uwOJBEqYY1DhKsU" width="800" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>
                            <div>
                            <Button className="m-2 button">Add friend</Button>
                            <Button className="m-2 button">Remove friend</Button> 
                            </div>
                        </Card>
                    </Row>

                </Col>

                <Col xs={2}></Col>
            </Row>
        
        </React.Fragment>
    )
}

export default UserProfile;

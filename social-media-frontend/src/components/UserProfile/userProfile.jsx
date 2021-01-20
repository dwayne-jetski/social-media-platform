import React from 'react';
import Card from  'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './userProfile.css';

const UserProfile = () => {
    return(
        <React.Fragment className="">
            
            <Row className="profile background">
                <Col xs={1}></Col>
                <Col>
                    <Card className="profile_card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <div className="container m-2">
                        <Card.Title>Nickname</Card.Title>
                        <Card.Text>
                        I joined MusicApp to: blah blah blah
                        </Card.Text>
                        </div>
                        <ListGroup variant="flush">
                            <Card.Title className="m-2">MUSICAL INTERESTS:</Card.Title>
                            <ListGroup.Item>Rap</ListGroup.Item>
                            <ListGroup.Item>RnB</ListGroup.Item>
                            <ListGroup.Item>Punk Rock</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs={.5}/>
                <Col>
                    <Card className="container m-2 profile_card">
                        <Card.Header>FIRST NAME LAST NAME</Card.Header>
                        <Card.Body>
                            <Card.Title>About me</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente tempora labore beatae blanditiis ex id sed tenetur laudantium incidunt minus consequuntur nulla nihil provident magni, mollitia laboriosam eaque neque veniam!
                            </Card.Text>
                        </Card.Body>
                        <Button variant="secondary" className="m-2">Add friend</Button>
                        <Button variant="secondary" className="m-2">Remove friend</Button>
                    </Card>
                </Col>
                <Col xs={2}></Col>
            </Row>
            
            <Row className="background_filler">
                <br></br>
            </Row>
            
            <Row className="background_player">
                <Col xs={3}/>
                <Col>
                    <iframe src="https://open.spotify.com/embed/album/52XjGg0uwOJBEqYY1DhKsU" width="800" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </Col>
                <Col/>
            </Row>

            <Row>
                <br></br>
            </Row>
        
        </React.Fragment>
    )
}

export default UserProfile;

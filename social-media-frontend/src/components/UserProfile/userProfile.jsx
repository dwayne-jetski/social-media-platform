import React, {useState} from 'react';
import Card from  'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './userProfile.css';
import ProfilePic from '../ProfilePic/ProfilePic';

const UserProfile = () => {

    const [isInputActive, setIsInputActive] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [firstName, setFirstName] = useState('Edward');
    const [lastName, setLastName] = useState('Roberson');
    const [firstGenre, setFirstGenre] = useState('RAP');
    const [secondGenre, setSecondGenre] = useState('RnB');
    const [thirdGenre, setThirdGenre] = useState('PUNK ROCK');
    const [bio, setBio] = useState("This is my bio. my bio is all about me. I'll edit this to give others an idea of who I am and what i'm here for.");
    const [playlist, setPlaylist] = useState("https://open.spotify.com/embed/album/52XjGg0uwOJBEqYY1DhKsU");
    const [ id, setId] = useState('1')

    return(
        <React.Fragment>  
            <Row className="profile background">
                <Col xs={1}></Col>
                <Col>
                    <Card className="background box_shadow" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://img1.looper.com/img/gallery/what-you-need-to-know-about-the-adventure-time-revival/intro-1571945539.jpg"/>
                    <Button className="m-2 button">Edit Photo</Button>
                    <Card.Body>
                        <div className="container m-1 text_color">
                        <Card.Title>{firstName} {lastName}</Card.Title>
                        <Card.Text>
                        Member since 2021
                        </Card.Text>
                        </div>
                        <br/>
                        <ListGroup variant="flush">
                            <Card.Title className="m-4 text_color">MUSICAL INTERESTS:</Card.Title>
                            <ListGroup.Item className="list_items">{firstGenre}</ListGroup.Item>
                            <ListGroup.Item className="list_items">{secondGenre}</ListGroup.Item>
                            <ListGroup.Item className="list_items">{thirdGenre}</ListGroup.Item>
                        </ListGroup>
                        <Button className="edit">Edit Profile</Button>
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
                                {bio}
                                </Card.Text>
                                <Card.Title>Check out my playlist:</Card.Title>
                            </Card.Body>
                            <div>
                            <iframe title={id} src={playlist} width="800" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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
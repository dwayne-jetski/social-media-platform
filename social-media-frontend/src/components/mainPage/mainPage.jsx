import React from 'react';
import Card from  'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './mainPage.css'


const MainPage = () => {
    return(
        <div className="main">
            <div>
                <Card className="main-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body className="">
                    <div className="container m-2">
                    <Card.Title>MusicAppUser</Card.Title>
                    <Card.Text>
                    Member since 2021
                    </Card.Text>
                    </div>

                    <div className="drop-downs">
                        <DropdownButton className="m-2" id="dropdown-item-button" title="Friends">
                        <Dropdown.Item as="button">friend 1</Dropdown.Item>
                        <Dropdown.Item as="button">friend 2</Dropdown.Item>
                        <Dropdown.Item as="button">friend 3</Dropdown.Item>
                        </DropdownButton>
                        <div>
                        <DropdownButton id="dropdown-item-button" title="Notifications">
                        <Dropdown.Item as="button">notification 1</Dropdown.Item>
                        <Dropdown.Item as="button">notification 2</Dropdown.Item>
                        <Dropdown.Item as="button">notification 3</Dropdown.Item>
                        </DropdownButton>
                        </div>
                    </div>
                </Card.Body>
                </Card>
            </div>

            <div className="time-line container">   
            <Card.Header>Post date/time</Card.Header>
            <Card.Body>
                <Card.Title>friend's name</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt asperiores, vero nisi quisquam in sapiente quos. Rerum eaque neque alias ea, pariatur rem fugit aperiam. Voluptas quos inventore voluptatem!
                </Card.Text>
                <Button variant="primary">Like</Button>
            </Card.Body>
            <Card.Header>Post date/time</Card.Header>
            <Card.Body>
                <Card.Title>friend's name</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt asperiores, vero nisi quisquam in sapiente quos. Rerum eaque neque alias ea, pariatur rem fugit aperiam. Voluptas quos inventore voluptatem!
                </Card.Text>
                <Button variant="primary">Like</Button>
            </Card.Body>
            <Card.Header>Post date/time</Card.Header>
            <Card.Body>
                <Card.Title>friend's name</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt asperiores, vero nisi quisquam in sapiente quos. Rerum eaque neque alias ea, pariatur rem fugit aperiam. Voluptas quos inventore voluptatem!
                </Card.Text>
                <Button variant="primary">Like</Button>
            </Card.Body>
            </div>

        </div>
    )
}

export default MainPage;
import React from 'react';
import Card from  'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import './mainPage.css'


const MainPage = () => {
    return(
        <div className="main">
            <div>
                <Card className="main-card border" style={{ width: '18rem' }}>
                <Card.Body className="">
                    <div className="drop-downs">
                        <DropdownButton variant="light" className="m-2 header" id="dropdown-item-button" title="Friends">
                        <Dropdown.Item as="button">friend 1</Dropdown.Item>
                        <Dropdown.Item as="button">friend 2</Dropdown.Item>
                        <Dropdown.Item as="button">friend 3</Dropdown.Item>
                        </DropdownButton>
                        <div>
                        <DropdownButton variant="light" id="dropdown-item-button" title="Notifications">
                        <Dropdown.Item as="button">notification 1</Dropdown.Item>
                        <Dropdown.Item as="button">notification 2</Dropdown.Item>
                        <Dropdown.Item as="button">notification 3</Dropdown.Item>
                        </DropdownButton>
                        </div>
                    </div>
                </Card.Body>
                <Form className="new_post">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} />
                    <Button className="header">Create post</Button>
                </Form.Group>
                </Form>
                </Card>

            </div>

            <div className="time-line container">
            <div className="border">
            <Card.Header className="header">Post date/time</Card.Header>
            <Card.Body>
                <Card.Title>friend's name</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt asperiores, vero nisi quisquam in sapiente quos. Rerum eaque neque alias ea, pariatur rem fugit aperiam. Voluptas quos inventore voluptatem!
                </Card.Text>
                <Button className="header">Like</Button>
            </Card.Body>
            </div>
            <div className="border">
            <Card.Header className="header">Post date/time</Card.Header>
            <Card.Body>
                <Card.Title>friend's name</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt asperiores, vero nisi quisquam in sapiente quos. Rerum eaque neque alias ea, pariatur rem fugit aperiam. Voluptas quos inventore voluptatem!
                </Card.Text>
                <Button className="header">Like</Button>
            </Card.Body>
            </div>
            <div className="border">
            <Card.Header className="header">Post date/time</Card.Header>
            <Card.Body>
                <Card.Title>friend's name</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt asperiores, vero nisi quisquam in sapiente quos. Rerum eaque neque alias ea, pariatur rem fugit aperiam. Voluptas quos inventore voluptatem!
                </Card.Text>
                <Button className="header">Like</Button>
            </Card.Body>
            </div> 
            <div className="border">
            <Card.Header className="header">Post date/time</Card.Header>
            <Card.Body>
                <Card.Title>friend's name</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt asperiores, vero nisi quisquam in sapiente quos. Rerum eaque neque alias ea, pariatur rem fugit aperiam. Voluptas quos inventore voluptatem!
                </Card.Text>
                <Button className="header">Like</Button>
            </Card.Body>
            </div>         
            </div>
        </div>
    )
}

export default MainPage;
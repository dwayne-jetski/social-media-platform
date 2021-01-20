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
                <Card className="main-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body className="">
                    <div className="container m-2">
                    <Card.Title>MUSICUSER17</Card.Title>
                    <Card.Text>
                    Member since 2021
                    </Card.Text>
                    </div>

                    <div className="drop-downs">
                        <DropdownButton variant="outline-primary" className="m-2" id="dropdown-item-button" title="Friends">
                        <Dropdown.Item as="button">friend 1</Dropdown.Item>
                        <Dropdown.Item as="button">friend 2</Dropdown.Item>
                        <Dropdown.Item as="button">friend 3</Dropdown.Item>
                        </DropdownButton>
                        <div>
                        <DropdownButton variant="outline-primary" id="dropdown-item-button" title="Notifications">
                        <Dropdown.Item as="button">notification 1</Dropdown.Item>
                        <Dropdown.Item as="button">notification 2</Dropdown.Item>
                        <Dropdown.Item as="button">notification 3</Dropdown.Item>
                        </DropdownButton>
                        </div>
                    </div>
                </Card.Body>
                </Card>

                <Form className="new_post">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} />
                    <Button variant="outline-primary">Create post</Button>
                </Form.Group>
                </Form>

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

            <footer class="py-3 bg-light">
                <div class="container">
                    <p class="text-center">Copyright &copy; MusicApp 2021</p>
                </div>
            </footer>
        </div>
    )
}

export default MainPage;
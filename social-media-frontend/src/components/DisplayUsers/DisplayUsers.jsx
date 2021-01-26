import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from  'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Image, { propTypes } from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './DisplayUsers.css';



function DisplayUsers(props) {


    function buildComments(){
        if(props.getUsers === null){
            axios.get('http://localhost:5000/api/users/')
            .then( res => {
                const retrievedUsers = res.data;
                console.log("users: ", retrievedUsers)
                props.useGetUsers(retrievedUsers);
            }).catch( err =>{
                console.log(err)
            });

         
        }

        let users;

        if(props.getUsers === null){
            
            users = [<h1>Loading</h1>];

        }else if(props.getUsers !== null){
            
            users = props.getUsers.map((usersList)=>{

                const { id, firstName, lastName } = usersList;

                return(
                    <Card className='card-background' id={id}>
                        <Col>
                            <Card.Img variant='left' className="image-size" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/31445027_1351262364973978_1562260608361955328_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=xeMMpwJ5Ae4AX8S6-wJ&_nc_ht=scontent-ort2-1.xx&oh=9851c643836c864e1eced194d50b9421&oe=602DA833" roundCircle/>
                        </Col>
                        <Col>
                            <Card.Header>{firstName} {lastName}</Card.Header>
                        </Col>
                        <Col>
                            <Button variant="outline-primary">Add Friend</Button>
                        </Col>
                    </Card>
                )
            });
        }

        return users;

    }



    return(
        <React.Fragment>
            <Row className='background'>
                <Col/>

                <Col>
                   {buildComments()}
                </Col>

                <Col/>   
            </Row>


        </React.Fragment>
    )
}

export default DisplayUsers;
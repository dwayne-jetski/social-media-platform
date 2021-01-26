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

    function handleClick(id){
        console.log('added friend: ', id)
    }


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

                const { _id, firstName, lastName } = usersList;

                return(
                    <Card className='card-background' id={_id}>
                        <Col>
                            <Card.Img variant='left' className="image-size" src="https://wallpaperaccess.com/full/354030.jpg" roundCircle/>
                        </Col>
                        <Col>
                            <Card.Header>{firstName} {lastName}</Card.Header>
                        </Col>
                        <Col>
                            <Button variant="outline-primary" id={_id} onClick={()=>handleClick(_id)}>Add Friend</Button>
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
 import React from 'react';   
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col'
    

 function Footer() {

  
  
  return(
      <React.Fragment>
        <Row>
            <Col xs={5}/>
            <Col xs={2}>
                <div class="py-3 bg-light">
                    <div class="container">
                        <p class="text-center">Copyright &copy; MusicApp 2021</p>
                    </div>
                </div>
            </Col>
            <Col xs={5}/>
        </Row>
    </React.Fragment>
  )
 }

 export default Footer;
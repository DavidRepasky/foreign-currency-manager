import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class EditDeleteButtons extends Component {
    
    render() {
       return (
         
        <Row>
        <Col xs={6}>
          <Button variant="warning" className="left-button" size="lg">EDIT</Button>
        </Col>
        <Col xs={6}>
          <Button variant="danger" className="right-button" size="lg">DELETE</Button>
        </Col>
      </Row>
 
       );


    }

}

export default EditDeleteButtons;
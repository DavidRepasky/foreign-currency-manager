import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function EditExpenseModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Row>
          <Col xs={6}>
            <Button variant="warning" onClick={handleShow} className="left-button" size="lg">EDIT</Button>
          </Col>
          <Col xs={6}>
          <Button variant="danger" className="right-button" size="lg">DELETE</Button>
          </Col>
        </Row>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="yellow" closeButton>
            <Modal.Title><h3 className="blue inter fw-800"><strong>Edit Expense</strong></h3></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="gutters">
             <Row>
             <Col xs={4}>       
             <h4 className="claret-text open-sans-condensed fw-800 expense-margins">UPDATED AMOUNT:</h4>
             </Col>
             <Col xs={8}>
             <input type="number" className="format-input expense-margins" name="updatedAmount" id="updatedAmount" val="0" /> 
             </Col>
             </Row>
             <Row>
              <Col xs={4}>
              <h4 className="claret-text open-sans-condensed fw-800 expense-margins">UPDATED CATEGORY:</h4>
              </Col>
              <Col xs={8}>
              <select name="expenseType" id="expenseType" className="format-input expense-margins">
                    <option value="dining">Dining</option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="lodging">Lodging</option>
                    <option value="transportation">Transportation</option>
                    <option value="convenience">Convenience</option>
                    <option value="airline-fees">Airline / Airport</option>
                   </select>
              </Col>   
             </Row>
            </div>  
          </Modal.Body>
          <Modal.Footer>
            <Button className="nav-menu-buttons" onClick={handleClose}>
              CLOSE
            </Button>
            <Button className="nav-menu-buttons" onClick={handleClose}>
              UPDATE
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default EditExpenseModal;
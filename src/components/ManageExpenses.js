import React, { Component } from 'react';
import CustomNav from './NavigationHeader';
import SiteFooter from './SiteFooter.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import render from 'react';
import EditDeleteButtons from './EditDeleteButtons';
import EditExpenseModal from './EditExpenseModal';
import {ReadData, readData} from '../data/CRUD';


class ManageExpenses extends Component {
    constructor(props) {
       super(props);
       this.state = {
          date: "03-31-2022"
       }
       this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    
    onChangeHandler(e) {
      this.setState({date: e.target.value});

    }

    render() {
       console.log(this.state.date);
       return(
         <div id="manageExpenses">
            <Container>
              <div className="gutters">  
               <h1 className="page-header blue text-center">MANAGE EXPENSES</h1>
               <Row>
                   <hr></hr><br></br>
                   <Col xs={6}>
                   <div className="mx-auto text-center mb-2">
                      <h4 className="currency text-center">$548</h4>
                      <h4 className="open-sans-condensed claret-text">TOTAL SPENT</h4>
                   </div>    
                   </Col>
                   <Col xs={6}>
                   <div className="mx-auto text-center mb-2">
                      <h4 className="currency text-center">$1452</h4>
                      <h4 className="open-sans-condensed claret-text">AVAILABLE</h4>
                   </div>     
                   </Col><br></br>
                  <hr></hr><br></br> 
               </Row>
                <Row>
                  <Col xs={12}>
                  <h4 className="claret-text open-sans-condensed text-center fw-800 mt-2 mb-2"><strong>FILTER BY DATE</strong></h4>     
                  <select name="filterByDate" id="filterByDate" ref={this.state.date} onChange={this.onChangeHandler} className="format-input expense-margins mb-3">
                    <option value="03-31-2022">3-31-2022</option>
                    <option value="04-01-2022">4-1-2022</option>
                   </select>
                  </Col>
               </Row>
               </div>
              </Container>
             
              <ReadData date={this.state.date} />

  
              {/* <Container>
                  <Row>
                      <Col xs={12}>
                        <hr></hr>
                        <div className="expense-margins">
                         <p className="blue text-center">If updating the expense amount, enter the amount spent in your host country's currency and the app will convert it for you.</p>
                        </div>
                        <hr></hr>
                      </Col>    
                  </Row>
              </Container>
              <Container>    
               <Row>
               <Col xs={12}>
                  <div className="mx-auto mt-2 mb-2 text-center">
                     <h2 className="currency text-center jumbo">$34.50</h2>
                     <h4 className="claret-text big open-sans-condensed text-center">TRANSPORTATION</h4>
                     <h4 className="claret-text big text-center">4-11-2022</h4>
                    </div> 
                   </Col>
                 </Row>   
                  <EditExpenseModal />
                  </Container>
                  <Container>
                     <Row>
                      <Col xs={12}>
                       <div className="mx-auto mt-5 mb-2 text-center">
                         <h2 className="currency text-center jumbo">$17.50</h2>
                         <h4 className="claret-text big open-sans-condensed text-center">FOOD</h4>
                         <h4 className="claret-text big text-center">4-11-2022</h4>
                         </div>
                         </Col>
                        </Row> 
                      <EditExpenseModal />
                   </Container>
                   <Container>
                     <Row>
                      <Col xs={12}>
                       <div className="mx-auto mt-5 mb-2 text-center">
                         <h2 className="currency text-center jumbo">$89.95</h2>
                         <h4 className="claret-text big open-sans-condensed text-center">AIRLINE / AIRPORT</h4>
                         <h4 className="claret-text big text-center">4-11-2022</h4>
                         </div>
                         </Col>
                        </Row> 
                      <EditExpenseModal />
                   </Container>
                   <Container>
                     <Row>
                      <Col xs={12}>
                       <div className="mx-auto mt-5 mb-2 text-center">
                         <h2 className="currency text-center jumbo">$72.93</h2>
                         <h4 className="claret-text big open-sans-condensed text-center">AIRLINE / AIRPORT</h4>
                         <h4 className="claret-text big text-center">4-11-2022</h4>
                         </div>
                         </Col>
                        </Row> 
                      <EditExpenseModal />
                   </Container> */}
                   <div style={{height: "250px"}}></div>   
                 </div>           
       ); 
    }
 }
 
 export default ManageExpenses;
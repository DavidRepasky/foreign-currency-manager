import React, { Component } from 'react';
import CustomNav from './NavigationHeader';
import SiteFooter from './SiteFooter.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class AddExpense extends Component {
    constructor(props) {
       super(props);
       this.state = {
          amount: 0

       }
   
      }

      localStorageCheck = (localStorage.getItem("quickConversionAmount")) ? JSON.parse(localStorage.getItem("quickConversionAmount")) : 0;
       
    render() {
       return(
         <div id="addExpense">
            <Container>
              <div className="gutters">  
               <h1 className="page-header blue text-center">ADD EXPENSE</h1>
               <div className="mx-auto mt-2 mb-2">
                     <h2 className="currency text-center jumbo">$34.50</h2>
                     </div>
               <input type="number" id="expenseAmount" name="expenseAmount" defaultValue={+this.localStorageCheck} ref={this.state.amount} className="format-input expense-margins"></input>
               <h4 className="claret-text open-sans-condensed text-center fw-800"><strong>EXPENSE AMOUNT</strong></h4>
               <p className="blue text-center">Enter the amount in the host country's currency, and it will be converted to your home currency.</p>
               <Row>
                  <Col xs={12}>
                  <div className="mx-auto mb-2">
                  <select name="expenseType" id="expenseType" className="format-input expense-margins">
                    <option value="dining">Dining</option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="lodging">Lodging</option>
                    <option value="transportation">Transportation</option>
                    <option value="convenience">Convenience</option>
                    <option value="airline-fees">Airline / Airport</option>
                   </select>
                     </div>
                     <h4 className="claret-text open-sans-condensed text-center fw-800 mt-2 mb-2"><strong>EXPENSE TYPE</strong></h4>
                  </Col>
               </Row>
               <Row>
               <Col xs={12}>
                  <div className="mx-auto mt-1 mb-1 text-center">
                       <Button className="conversion-page-buttons">SAVE EXPENSE</Button>       
                     </div>
                  </Col>
               </Row>
               
               </div>
            </Container>           
         </div>
       ); 
    }
 }
 
 export default AddExpense;
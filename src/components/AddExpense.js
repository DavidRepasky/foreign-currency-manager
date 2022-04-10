import React, { Component } from 'react';
import CustomNav from './NavigationHeader';
import SiteFooter from './SiteFooter.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AddExpenseCalculate from './AddExpenseCalculate';
import {checkDay} from "../data/HelperFunctions";
import {saveData} from '../data/CRUD';
import {toast} from 'react-toastify';

class AddExpense extends Component {
    constructor(props) {
       super(props);
       this.state = {
          amount: +this.localStorageCheck,
          conversionRate: JSON.parse(localStorage.getItem("conversionRate")),
          homeSymbol: JSON.parse(localStorage.getItem("homeSymbol")),
          category: "dining"

       }
       this.onChangeAmount = this.onChangeAmount.bind(this);
       this.onCategorySelect = this.onCategorySelect.bind(this);
       this.submitData = this.submitData.bind(this);
       checkDay();
    }
   
    onChangeAmount(e) {
       this.setState({ amount: e.target.value });
     }
     onCategorySelect(e) {
      this.setState({ category: e.target.value });
  
    }
    
    submitData(e, category) {
       e.preventDefault();
       saveData(category);
       localStorage.setItem('quickConversionAmount', "0");
       this.state.amount = 0;
       this.state.category = "dining";
       toast.success("Expense saved!", {autoClose: 2000});
       window.location.reload(true);

    }

    

      localStorageCheck = (localStorage.getItem("quickConversionAmount")) ? JSON.parse(localStorage.getItem("quickConversionAmount")) : 0;
      
    render() { 
       return(
         <div id="addExpense">
            <Container>
              <div className="gutters">  
               <h1 className="page-header blue text-center">ADD EXPENSE</h1>
               <div className="mx-auto mt-2 mb-2">
                     <h2 className="currency text-center jumbo">{this.state.homeSymbol}<AddExpenseCalculate amount={this.state.amount} rate={this.state.conversionRate} /></h2>
                     </div>
              <form onSubmit={(e) => this.submitData(e, this.state.category)}>      
               <input type="number" id="expenseAmount" name="expenseAmount" defaultValue={+this.localStorageCheck} ref={this.state.amount} onChange={this.onChangeAmount} className="format-input expense-margins"></input>
               <h4 className="claret-text open-sans-condensed text-center fw-800"><strong>EXPENSE AMOUNT</strong></h4>
               <p className="blue text-center">Enter the amount in the host country's currency, and it will be converted to your home currency.</p>
               <Row>
                  <Col xs={12}>
                  <div className="mx-auto mb-2">
                  <select name="expenseType" id="expenseType" ref={this.state.category} onChange={this.onCategorySelect} className="format-input expense-margins">
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
                       <Button type="submit" className="conversion-page-buttons">SAVE EXPENSE</Button>       
                     </div>
                  </Col>
               </Row>
               </form>
               </div>
            </Container>           
         </div>
       ); 
    }
 }
 
 export default AddExpense;
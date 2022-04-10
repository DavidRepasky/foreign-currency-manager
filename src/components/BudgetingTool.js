import React, { Component } from 'react';
import CustomNav from './NavigationHeader';
import SiteFooter from './SiteFooter.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import BudgetFeeHandler from './BudgetFeeHandler';
import BudgetAdjustedCalculator from './BudgetAdjustedCalculator';
import BudgetingToolCalculate from './BudgetingToolCalculate';
import { checkDay, curday } from '../data/HelperFunctions';

const userImport = JSON.parse(localStorage.getItem("user"));

class BudgetingTool extends Component {
   constructor(props) {
      super(props);
      this.onUpdateAmount = this.onUpdateAmount.bind(this);
      this.state = {
        conversionRate: JSON.parse(localStorage.getItem("conversionRate")),
        foreignSymbol: JSON.parse(localStorage.getItem("foreignSymbol")),
        homeSymbol: JSON.parse(localStorage.getItem("homeSymbol")),
        amount: "",
        bankFeeMethod: userImport.bankFee,

      }
     checkDay(); 
   }

   onUpdateAmount(e) {
      this.setState({ amount: e.target.value });
    }

   render() {
      return(
        <div id="budgetingTool">
           <Container>
             <div className="gutters">  
              <h1 className="page-header blue text-center">BUDGETING TOOL</h1>
              <p className="blue text-center">Enter a budget in your home currency, and see how much you can spend.</p>
              <input type="number" id="budgetQuickCheck" name="budgetQuickCheck" value={this.state.amount} onChange={this.onUpdateAmount} className="format-input"></input>
              <Row>
                 <Col xs={12}>
                 <div className="mx-auto mt-5 mb-4">
                    <h2 className="currency text-center jumbo">{this.state.foreignSymbol}<BudgetingToolCalculate amount={this.state.amount} rate={this.state.conversionRate} /></h2>
                    <h4 className="claret-text open-sans-condensed text-center big fw-800"><strong>HERE'S HOW MUCH<br></br>YOU CAN SPEND.</strong></h4>
                    </div>
                 </Col>
              </Row>
              <Row>
                  <Col xs={6}>
                  <div className="mx-auto mt-4 mb-4">
                    <h2 className="fw-400 text-center inter big">{this.state.homeSymbol}<BudgetAdjustedCalculator amount={this.state.amount} rate={this.state.conversionRate} /></h2>
                    <h4 className="claret-text open-sans-condensed text-center enhanced"><strong>AFTER FEES</strong></h4>
                    </div>
                  </Col>
                  <Col xs={6}>
                  <div className="mx-auto mt-4 mb-4">
                    <h2 className="fw-400 text-center inter big">{this.state.homeSymbol}<BudgetFeeHandler amount={this.state.amount} /></h2>
                    <h4 className="claret-text open-sans-condensed text-center enhanced"><strong>BANK FEES</strong></h4>
                    </div>
                  </Col>
              </Row>
              </div>
           </Container>           
        </div>
      ); 
   }
}

export default BudgetingTool;
import React, { Component, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import QuickConversionFeeHandler from './QuickConversionFeeHandler';
import QuickConversionCalculate from './QuickConversionCalculate';
import { defaultSettings } from '../data/HelperFunctions';

let userDataImport = JSON.parse(localStorage.getItem("user")); 

class QuickConversion extends Component { 

   constructor(props) {
      super(props);
      this.onChangeAmount = this.onChangeAmount.bind(this);
      this.state = {
        conversionRate: JSON.parse(localStorage.getItem("conversionRate")),
        homeSymbol: JSON.parse(localStorage.getItem("homeSymbol")),
        amount: 0,
        bankFeeMethod: userDataImport.bankFee,

      }
   }

     onChangeAmount(e) {
      this.setState({ amount: e.target.value });
    }

    computedTotal() {

    return ((this.state.conversionRate * this.state.amount) + (this.state.calculatedFees)).toFixed(2);

    }

   render() {
      return(
        <div id="quickConversion">
           <Container>
             <div className="gutters">  
              <h1 className="page-header blue text-center">QUICK CONVERSION</h1>
              <input type="number" id="amountToConvert" name="amountToConvert" value={this.state.amount} onChange={this.onChangeAmount} className="format-input"></input>
              <Row>
                 <Col xs={12}>
                 <div className="mx-auto mt-5 mb-4">
                    <h2 className="currency text-center jumbo">{this.state.homeSymbol}<QuickConversionCalculate amount={this.state.amount} rate={this.state.conversionRate} /></h2>
                    <h4 className="claret-text open-sans-condensed text-center big fw-800"><strong>TOTAL COST</strong></h4>
                    </div>
                 </Col>
              </Row>
              <Row>
                  <Col xs={6}>
                  <div className="mx-auto mt-4 mb-4">
                    <h2 className="fw-400 text-center inter big">{this.state.homeSymbol}{(this.state.conversionRate * this.state.amount).toFixed(2)}</h2>
                    <h4 className="claret-text open-sans-condensed text-center enhanced"><strong>BASE PRICE</strong></h4>
                    </div>
                  </Col>
                  <Col xs={6}>   
                  <div className="mx-auto mt-4 mb-4">
                    <h2 className="fw-400 text-center inter big">{this.state.homeSymbol}<QuickConversionFeeHandler amount={this.state.amount} rate={this.state.conversionRate} /></h2>
                    <h4 className="claret-text open-sans-condensed text-center enhanced"><strong>BANK FEES</strong></h4>
                    </div>
                  </Col>
              </Row>
              <Row>
                <Col xs={12}>
                 <div style={{width: "180px"}} className="mx-auto">   
                 <Link to='/add-expenses'><Button className="conversion-page-buttons text-center" size="lg">ADD EXPENSE</Button></Link>
                  </div>
                </Col>  
              </Row>
              </div>
           </Container>           
        </div>
      ); 
   }
}

export default QuickConversion;
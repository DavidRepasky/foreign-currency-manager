import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ForeignCurrencyCodeSelect from './CurrencyCodeSelect';
import HomeCurrencyCodeSelect from './CurrencyCodeSelectHome';
import BankFeeTypeSelect from './BankFeeType';
import BankFeeHandler from './BankFeeHandler';
import TotalTripBudget from './TotalTripBudget';

class Settings extends Component {
    
    constructor(props) {
      super(props);

    }

    render() {
        return(
          <div id="settings">
           <Container>
             <div className="gutters">
               <Row>
                 <Col xs={12}>
                 <h1 className="page-header blue text-center">SETTINGS</h1>
                 <div className="expense-margins mb-4">
                 <h4 className="claret-text open-sans-condensed text-center fw-800"><strong>SELECT FOREIGN CURRENCY</strong></h4>
                 <ForeignCurrencyCodeSelect />
                 </div>
                 <div className="expense-margins mb-4">
                 <h4 className="claret-text open-sans-condensed text-center fw-800"><strong>SELECT HOME CURRENCY</strong></h4>
                 <HomeCurrencyCodeSelect />
                 </div>
                 <div className="expense-margins mb-4">
                 <h4 className="claret-text open-sans-condensed text-center fw-800"><strong>HOW DOES YOUR BANK CALCULATE<br></br> FOREIGN TRANSACTION FEES?</strong></h4>
                 <BankFeeTypeSelect />
                 </div>
                 <div className="expense-margins mb-4">
                 <TotalTripBudget />
                 </div>
                 <div className="text-center expense-margins mx-auto">
                     <Button className="nav-menu-buttons" size="lg">SAVE SETTINGS</Button>
                 </div>
                 </Col>
               </Row>    
             </div>
             <div style={{height: "175px"}}></div>
           </Container>
          </div>
        );
    }

}

export default Settings;
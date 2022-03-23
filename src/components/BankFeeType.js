import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BankFeeHandler from './BankFeeHandler';
import {useState, useEffect} from 'react';


class BankFeeTypeSelect extends Component {

    constructor(props, BankFeeHandler) {
         super(props);
         this.state = {value: ""};
         this.handleChange = this.handleChange.bind(this);

    } 

    handleChange(event) { this.setState({value: event.target.value}); console.log(this.state); }

    render() {   
       
       return(
          <div id="bank-fee-type">
            <select name="bankFeeType" id="bankFeeType" value={this.state.value} onChange={this.handleChange} className="format-input expense-margins mb-3">
            <option value="null">Choose type...</option>
            <option value="fixed">Fixed Fee</option>
            <option value="percentage">Percentage of Total</option>
            <option value="both">Fixed Fee + Percentage</option>
            <option value="no-fees">Don't Calculate Bank Fees</option>
          </select>
          <BankFeeHandler value={this.state.value}/>
         </div>
       ); 
    }
}

export default BankFeeTypeSelect;


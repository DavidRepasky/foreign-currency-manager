import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class FixedFeeAmount extends Component {
   
    userFixedFeeData;

    constructor(props) {
       super(props);
       
        this.onChangeFixedFeeRate = this.onChangeFixedFeeRate.bind(this);
        this.state = {fixedFeeRate: ""};

       
    }

    onChangeFixedFeeRate(e) {
        this.setState({ fixedFeeRate: e.target.value });
    }

    componentDidMount() {
        this.userFixedFeeData = JSON.parse(localStorage.getItem("fixedFee"));
 
        if (localStorage.getItem('fixedFee')) {
 
           this.setState({

              fixedFeeRate: this.userFixedFeeData.fixedFeeRate
 
           });
 
        }
        else {
            this.setState({
 
              fixedFeeRate: 2.5
 
            });
        }
 
    }
 
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem("fixedFee", JSON.stringify(nextState));
 
    }
    render() {
       
        return(
           
            <div id="enter-fixed-fee">
             <h4 className="claret-text open-sans-condensed text-center fw-800"><strong>ENTER THE FIXED<br></br>FOREIGN TRANSACTION FEE HERE</strong></h4>
             <input type="number" id="fixedFeeAmount" name="fixedFeeAmount" value={this.state.fixedFeeRate} onChange={this.onChangeFixedFeeRate} className="format-input expense-margins"></input>
            </div>

        );

    }
}

export default FixedFeeAmount;
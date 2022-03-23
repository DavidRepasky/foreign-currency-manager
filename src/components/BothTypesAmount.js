import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class BothTypesAmount extends Component {

    userBothFeesData;

    constructor(props) {
       super(props);
       
        this.onChangeBothFixedFeeRate = this.onChangeBothFixedFeeRate.bind(this);
        this.onChangeBothPercentageFeeRate = this.onChangeBothPercentageFeeRate.bind(this);
        this.state = { bothFixedFeeRate: "2.5", bothPercentageFeeRate: ".04" };

       
    }

    onChangeBothFixedFeeRate(e) {
        this.setState({ bothFixedFeeRate: e.target.value });
    }
    onChangeBothPercentageFeeRate(e) {
        this.setState({ bothPercentageFeeRate: e.target.value });
    }

    componentDidMount() {
        this.userBothFeesData = JSON.parse(localStorage.getItem("bothFees"));
 
        if (localStorage.getItem('bothFees')) {
 
           this.setState({

              bothPercentageFeeRate: this.userBothFeesData.bothPercentageFeeRate,
              bothFixedFeeRate: this.userBothFeesData.bothFixedFeeRate

           });
 
        }
        else {
            this.setState({
 
              bothPercentageFeeRate: "",
              bothFixedFeeRate: ""
 
            });
        }
 
    }
 
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem("bothFees", JSON.stringify(nextState));
 
    }

    render() {
       
        return(
           
            <div id="enter-both-fees">
             <h4 className="claret-text open-sans-condensed text-center fw-800 expense-margins"><strong>ENTER THE FIXED<br></br>FOREIGN TRANSACTION FEE HERE</strong></h4>
             <input type="number" id="fixedFeeAmount" name="fixedFeeAmount" value={this.state.bothFixedFeeRate} onChange={this.onChangeBothFixedFeeRate} className="format-input expense-margins"></input>
             <h4 className="claret-text open-sans-condensed text-center expense-margins fw-800"><strong>ENTER THE PERCENTAGE<br></br>FOREIGN TRANSACTION FEE HERE</strong></h4>
             <select className="format-input expense-margins" value={this.state.bothPercentageFeeRate} onChange={this.onChangeBothPercentageFeeRate} name="percentageRatesB" id="percentageRatesB">
                <option value="0">0%</option>
                <option value=".01">1%</option>
                <option value=".02">2%</option>
                <option value=".03">3%</option>
                <option value=".04">4%</option>
                <option value=".05">5%</option>
                <option value=".06">6%</option>
                <option value=".07">7%</option>
                <option value=".08">8%</option>
                <option value=".09">9%</option>
                <option value=".1">10%</option>
              </select>
            </div>

        );

    }
}

export default BothTypesAmount;
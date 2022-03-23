import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PercentageFeeAmount extends Component {
    userPercentageFeeData;

    constructor(props) {
       super(props);
       
        this.onChangePercentageFeeRate = this.onChangePercentageFeeRate.bind(this);
        this.state = { percentageFeeRate: ""};

       
    }

    onChangePercentageFeeRate(e) {
        this.setState({ percentageFeeRate: e.target.value });
    }

    componentDidMount() {
        this.userPercentageFeeData = JSON.parse(localStorage.getItem("percentageFee"));
 
        if (localStorage.getItem('percentageFee')) {
 
           this.setState({

              percentageFeeRate: this.userPercentageFeeData.percentageFeeRate
 
           });
 
        }
        else {
            this.setState({
 
              percentageFeeRate: ".04"
 
            });
        }
 
    }
 
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem("percentageFee", JSON.stringify(nextState));
 
    }
    render() {
       
        return(
           
            <div id="enter-percentage-fee">
             <h4 className="claret-text open-sans-condensed text-center fw-800"><strong>ENTER THE PERCENTAGE<br></br>FOREIGN TRANSACTION FEE HERE</strong></h4>
             <select className="format-input expense-margins" value={this.state.percentageFeeRate} onChange={this.onChangePercentageFeeRate} name="bank-conversion-fees" id="b-rates">
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

export default PercentageFeeAmount;
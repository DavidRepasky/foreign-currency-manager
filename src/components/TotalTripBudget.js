import React, { Component } from "react";


class TotalTripBudget extends Component {

    render() {
      
       return(
        <div id="total-trip">
        <h4 className="claret-text open-sans-condensed text-center fw-800"><strong>ENTER YOUR<br></br>TOTAL TRIP BUDGET</strong></h4>
        <input type="number" id="totalBudget" name="totalBudget" value="0" className="format-input expense-margins"></input>
       </div>
       
        ); 

    }
}

export default TotalTripBudget;
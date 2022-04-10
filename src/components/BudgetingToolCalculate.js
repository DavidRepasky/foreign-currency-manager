function BudgetingToolCalculate(props) {
    
    let feeData = JSON.parse(localStorage.getItem("user"));
    let feeType = feeData.bankFee;
    
    let fixed = JSON.parse(localStorage.getItem("fixedFee"));
    let fixedAmount = fixed.fixedFeeRate;
    
    let percentage = JSON.parse(localStorage.getItem("percentageFee"));
    let percentageAmount = percentage.percentageFeeRate;
    
    let both = JSON.parse(localStorage.getItem("bothFees"));
    let bothFixedAmount = both.bothFixedFeeRate;
    let bothPercentAmount = both.bothPercentageFeeRate;

   
    if (feeType === "fixed") {

        if(props.amount === "" || props.amount === "0") {

            return "0.00";
        }

        return ((props.amount - (+fixedAmount)) / props.rate).toFixed(2);
    }
    else if (feeType === "percentage") {

        if(props.amount === "" || props.amount === "0") {

            return "0.00";
        }

        return ((props.amount - (props.amount / (1 + percentageAmount) * percentageAmount)) / props.rate).toFixed(2);
    }

    else if (feeType === "both") {

        if(props.amount === "" || props.amount === "0") {

            return "0.00";
        }

        return ((props.amount - ((props.amount / (1 + bothPercentAmount) * bothPercentAmount) + (+bothFixedAmount))) / props.rate).toFixed(2);
    } 
    else if (feeType === "no-fees") {

        if(props.amount === "" || props.amount === 0) {

            return "0.00";
        }

        return (props.amount / props.rate).toFixed(2);
    }
    
  }

export default BudgetingToolCalculate;
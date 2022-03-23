function QuickConversionCalculate(props) {
    
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

        if(props.amount === "" || props.amount === 0) {

            return "0.00";
        }

        return ((props.rate * props.amount) + (+fixedAmount)).toFixed(2);
    }
    else if (feeType === "percentage") {

        if(props.amount === "" || props.amount === 0) {

            return "0.00";
        }

        return ((props.rate * props.amount) + ((props.rate * props.amount) * (percentageAmount))).toFixed(2);
    }

    else if (feeType === "both") {

        if(props.amount === "" || props.amount === 0) {

            return "0.00";
        }

        return ((props.rate * props.amount) + ((props.rate * props.amount) * (bothPercentAmount)) + (+bothFixedAmount)).toFixed(2);
    } 
    else if (feeType === "no-fees") {

        if(props.amount === "" || props.amount === 0) {

            return "0.00";
        }

        return (props.rate * props.amount);
    }
    
  }

export default QuickConversionCalculate;
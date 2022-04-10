

function AddExpenseCalculate(props) {
    
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

        let calculatedFixed = ((props.rate * props.amount) + (+fixedAmount)).toFixed(2);
        localStorage.setItem("addExpense", JSON.stringify(calculatedFixed));

        return ((props.rate * props.amount) + (+fixedAmount)).toFixed(2);
    }
    else if (feeType === "percentage") {

        if(props.amount === "" || props.amount === 0) {

            return "0.00";
        }

        let calculatedPercentage = ((props.rate * props.amount) + ((props.rate * props.amount) * (percentageAmount))).toFixed(2);
        localStorage.setItem("addExpense", JSON.stringify(calculatedPercentage));

        return ((props.rate * props.amount) + ((props.rate * props.amount) * (percentageAmount))).toFixed(2);
    }

    else if (feeType === "both") {

        if(props.amount === "" || props.amount === 0) {

            return "0.00";
        }

        let calculatedBoth = ((props.rate * props.amount) + ((props.rate * props.amount) * (bothPercentAmount)) + (+bothFixedAmount)).toFixed(2); 

        localStorage.setItem("addExpense", JSON.stringify(calculatedBoth));

        return ((props.rate * props.amount) + ((props.rate * props.amount) * (bothPercentAmount)) + (+bothFixedAmount)).toFixed(2);
    } 
    else if (feeType === "no-fees") {

        if(props.amount === "" || props.amount === 0) {

            return "0.00";
        }

        let calculatedNone = (props.rate * props.amount).toFixed(2);
        localStorage.setItem("addExpense", JSON.stringify(calculatedNone));

        return (props.rate * props.amount).toFixed(2);
    }
    
  }

export default AddExpenseCalculate;
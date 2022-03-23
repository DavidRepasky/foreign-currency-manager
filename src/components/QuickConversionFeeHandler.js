
function QuickConversionFeeHandler(props) {
    
    let feeData = JSON.parse(localStorage.getItem("user"));
    let feeType = feeData.bankFee;
    let homeCurrencySymbol = JSON.parse(localStorage.getItem("homeSymbol"));

    console.log(feeType);
   
    if (feeType === "fixed") {

        return <HandleFixedFees symbol={homeCurrencySymbol} />;
    }
    else if (feeType === "percentage") {

        return <HandlePercentageFees cost={props.amount} conversion={props.rate} symbol={homeCurrencySymbol} />;
    }

    else if (feeType === "both") {

        return <HandleBothFees costs={props.amount} rate={props.rate} symbol={homeCurrencySymbol} />
    } 
    else if (feeType === "no-fees") {

        return "0.00";
    }

    else {

        return <p className="blue expense-margins text-center">Please make a selection.</p>
    }
    
  }

  function HandleFixedFees(props) {

    let fixedFeeData = JSON.parse(localStorage.getItem("fixedFee"));
    let fixedFees = JSON.parse(fixedFeeData.fixedFeeRate);
    
    let calculatedFees = fixedFees.toFixed(2);

     return calculatedFees;

  }

  function HandlePercentageFees(props) {

    let percentageFeeData = JSON.parse(localStorage.getItem("percentageFee"));
    let percentageFees = percentageFeeData.percentageFeeRate;
    
    let calculatedPercentageFees = ((props.cost * props.conversion) * percentageFees).toFixed(2);
    console.log(calculatedPercentageFees);

    return calculatedPercentageFees;

  }

  function HandleBothFees(props) {

     let bothFeesData = JSON.parse(localStorage.getItem("bothFees"));
     let bothFixedRate = bothFeesData.bothFixedFeeRate;
     let bothPercentageRate = bothFeesData.bothPercentageFeeRate;

     let calculatedBothFees = (((props.costs * props.rate) * bothPercentageRate) + (+bothFixedRate)).toFixed(2);

     return calculatedBothFees;
    

  }


export default QuickConversionFeeHandler;
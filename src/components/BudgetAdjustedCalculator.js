function BudgetAdjustedCalculator(props) {
    
    let adjustedFeeData = JSON.parse(localStorage.getItem("user"));
    let adjustedFeeType = adjustedFeeData.bankFee;

    console.log(adjustedFeeType);
   
    if (adjustedFeeType === "fixed") {

        return <AdjustedFixedFees fixed={props.amount} />;
    }
    else if (adjustedFeeType === "percentage") {

        return <AdjustedPercentageFees percentage={props.amount} />;
    }

    else if (adjustedFeeType === "both") {

        return <AdjustedBothFees both={props.amount} />;
    } 
    else if (adjustedFeeType === "no-fees") {

        return `${props.amount}`;
    }

    else {

        return <div />
    }
  }

  function AdjustedFixedFees(props) {

    let adjustedFixedFeeData = JSON.parse(localStorage.getItem("fixedFee"));
    let adjustedFixedFeesRate = JSON.parse(adjustedFixedFeeData.fixedFeeRate);
    
    let adjustedCalculatedFees = adjustedFixedFeesRate.toFixed(2);

    if (props.fixed === "" || props.fixed === "0") {

        return `0.00`;

    }else {

     return (props.fixed - adjustedCalculatedFees).toFixed(2);
    
    }

  }

  function AdjustedPercentageFees(props) {

    let adjustedPercentageFeeData = JSON.parse(localStorage.getItem("percentageFee"));
    let adjustedPercentageFees = adjustedPercentageFeeData.percentageFeeRate;
    
    let adjustedPercentageFeesAmount = (props.percentage / ( 1 + adjustedPercentageFees) * adjustedPercentageFees).toFixed(2);
    console.log(adjustedPercentageFeesAmount);

    if (props.percentage === "" || props.percentage === "0") {

        return `0.00`;

    }else {

    return (props.percentage - adjustedPercentageFeesAmount).toFixed(2);

    }
  }
  function AdjustedBothFees(props) {

     let adjustedBothFeesData = JSON.parse(localStorage.getItem("bothFees"));
     let adjustedBothFixedRate = adjustedBothFeesData.bothFixedFeeRate;
     let adjustedBothPercentageRate = adjustedBothFeesData.bothPercentageFeeRate;

     let adjustedCalculatedBothFees = ((props.both / ( 1 + adjustedBothPercentageRate) * adjustedBothPercentageRate) + (+adjustedBothFixedRate)).toFixed(2);
     
     if (props.both === "" || props.both === "0") {

        return `0.00`;

     }else {
     return (props.both - adjustedCalculatedBothFees).toFixed(2);
    
    }
  }

export default BudgetAdjustedCalculator;
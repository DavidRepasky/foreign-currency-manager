
function BudgetFeeHandler(props) {
    
    let budgetFeeData = JSON.parse(localStorage.getItem("user"));
    let budgetFeeType = budgetFeeData.bankFee;

    console.log(budgetFeeType);
   
    if (budgetFeeType === "fixed") {

        return <BudgetFixedFees />;
    }
    else if (budgetFeeType === "percentage") {

        return <BudgetPercentageFees cost={props.amount} />;
    }

    else if (budgetFeeType === "both") {

        return <BudgetBothFees costs={props.amount} />
    } 
    else if (budgetFeeType === "no-fees") {

        return "0.00";
    }

    else {

        return <div />
    }
  }

  function BudgetFixedFees(props) {

    let budgetFixedFeeData = JSON.parse(localStorage.getItem("fixedFee"));
    let budgetFixedFeesRate = JSON.parse(budgetFixedFeeData.fixedFeeRate);
    
    let budgetCalculatedFees = budgetFixedFeesRate.toFixed(2);

     return budgetCalculatedFees;

  }

  function BudgetPercentageFees(props) {

    let budgetPercentageFeeData = JSON.parse(localStorage.getItem("percentageFee"));
    let budgetPercentageFees = budgetPercentageFeeData.percentageFeeRate;
    
    let calculatedPercentageFees = (props.cost / (1 + budgetPercentageFees) * budgetPercentageFees).toFixed(2);
    console.log(calculatedPercentageFees);

    return calculatedPercentageFees;

  }

  function BudgetBothFees(props) {

     let budgetBothFeesData = JSON.parse(localStorage.getItem("bothFees"));
     let budgetBothFixedRate = budgetBothFeesData.bothFixedFeeRate;
     let budgetBothPercentageRate = budgetBothFeesData.bothPercentageFeeRate;

     let budgetCalculatedBothFees = ((props.costs / (1 + budgetBothPercentageRate) * budgetBothPercentageRate) + (+budgetBothFixedRate)).toFixed(2);

     return budgetCalculatedBothFees;
    

  }


export default BudgetFeeHandler;
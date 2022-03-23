import { Component } from "react";
import React from "react";
import FixedFeeAmount from "./FixedFeeAmount";
import PercentageFeeAmount from "./PercentageFeeAmount";
import BothTypesAmount from "./BothTypesAmount";
import DontTrackFees from "./DontTrackFees";
import { useState } from "react";
import BankFeeType from "./BankFeeType";

function BankFeeHandler(props) {
      
    const value = props.value;
    console.log(value);
   
    if (value === "fixed") {

        return <FixedFeeAmount />;
    }
    else if (value === "percentage") {

        return <PercentageFeeAmount />;
    }

    else if (value === "both") {

        return <BothTypesAmount />;
    } 
    else if (value === "no-fees") {

        return <DontTrackFees />;
    }

    else {

        return <p className="blue expense-margins text-center">Please make a selection.</p>
    }
    
  }


export default BankFeeHandler;
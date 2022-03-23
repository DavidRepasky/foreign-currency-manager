import React from 'react';
import axios from 'axios';
import { curday } from './HelperFunctions';

export const convertCurrencies = () => {
   
    let currencyData = JSON.parse(localStorage.getItem("user"));
    let foreignCurrency = currencyData.foreign;
    console.log(foreignCurrency);
    let homeCurrency = currencyData.home;
    console.log(homeCurrency);

    axios.get(`https://api.exchangeratesapi.io/v1/latest?access_key=a113806b1c97cc714762cb654bd5615a&base=${foreignCurrency}&symbols=${homeCurrency}`)
    .then(res => {
        
        console.log(res);
        let returnedCurrency = res.data.rates[homeCurrency];
        console.log(returnedCurrency);

        localStorage.setItem("conversionRate", JSON.stringify(returnedCurrency));

        const priorDay = curday('/');

        localStorage.setItem("previousDay", JSON.stringify(priorDay));

    }).catch(err => {

        console.log(err);
        
    })
}
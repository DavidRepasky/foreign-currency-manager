import { currencyIcon } from "./CurrencySymbol";

export function curday(sp){

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
  
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
  
  };

  export function foreignSymbol(currencyIcon) {

    let userCurrencyData = JSON.parse(localStorage.getItem("user"));
    let foreignCurrencyCode = userCurrencyData.foreign;
    
    let setCurrency = currencyIcon[foreignCurrencyCode].symbol;
    console.log(setCurrency);

    localStorage.setItem('foreignSymbol', JSON.stringify(setCurrency));
  
    }

    export function homeSymbol(currencyIcon) {
       
      let homeUserCurrencyData = JSON.parse(localStorage.getItem("user"));
      let homeCurrencyCode = homeUserCurrencyData.home;

      let setHomeCurrency = currencyIcon[homeCurrencyCode].symbol;
      console.log(setHomeCurrency);
  
      localStorage.setItem('homeSymbol', JSON.stringify(setHomeCurrency));

    }

    export function defaultSettings() {

      if (localStorage.getItem('homeSymbol') === "undefined" || localStorage.getItem('homeSymbol') === "null" ) {
        
        console.log("Hi from default settings!");
        
        localStorage.setItem('homeSymbol', "$");

      }
    }
 
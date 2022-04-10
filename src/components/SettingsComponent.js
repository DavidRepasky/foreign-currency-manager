import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import BankFeeHandler from './BankFeeHandler';
import { convertCurrencies } from '../data/Api';
import { currencyIcon } from '../data/CurrencySymbol';
import { foreignSymbol } from '../data/HelperFunctions';
import { homeSymbol } from '../data/HelperFunctions';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

class UserSettings extends Component {
  
  userData;  
    
  constructor(props) {
      super(props);

      this.state = {
        foreign: "EUR",
        home: "USD",
        bankFee: "fixed",
        budget: 2000
    }

      this.onChangeForeign = this.onChangeForeign.bind(this);
      this.onChangeHome = this.onChangeHome.bind(this);
      this.onChangeFee = this.onChangeFee.bind(this);
      this.onChangeBudget = this.onChangeBudget.bind(this);


  }

  onChangeForeign(e) {
      this.setState({ foreign: e.target.value });
  }

  onChangeHome(e) {
    this.setState({ home: e.target.value }); 
   }

   onChangeFee(e) {
     this.setState({ bankFee: e.target.value });  
   } 

   onChangeBudget(e) {
     this.setState({ budget: e.target.value });  
   }

   onSubmit(e) {
      e.preventDefault();
      convertCurrencies();
      homeSymbol(currencyIcon);
      foreignSymbol(currencyIcon);
      localStorage.setItem('isAppSetup', "true");
      toast.success("Settings updated!", {autoClose: 2000});
      setTimeout(function() {window.location.assign("http://localhost:3000")}, 3000);
      
      

   }

   componentDidMount() {
       this.userData = JSON.parse(localStorage.getItem("user"));

       if (localStorage.getItem('user')) {

          this.setState({
             foreign: this.userData.foreign,
             home: this.userData.home,
             bankFee: this.userData.bankFee,
             budget: this.userData.budget

          })

       }
       else {
           this.setState({

             foreign: "EUR",
             home: "USD",
             bankFee: "fixed",
             budget: 2000

           })
       }

   }

   componentWillUpdate(nextProps, nextState) {
       localStorage.setItem("user", JSON.stringify(nextState));

   }

  render() {
    return(
      <div id="userSettings">
           <Container>
             <div className="gutters">
               <Row>
                 <Col xs={12}>
                 <h1 className="page-header blue text-center">SETTINGS</h1>
                 <div className="expense-margins mb-4">
                 <form onSubmit={this.onSubmit}>
                 <div className="expense-margins mb-4">
                  <h4 className="claret-text open-sans-condensed text-center fw-800"><strong>ENTER YOUR<br></br>TOTAL TRIP BUDGET</strong></h4>
                  <input type="number" id="totalBudget" name="totalBudget" value={this.state.budget} onChange={this.onChangeBudget} className="format-input expense-margins"></input>
                 </div>  
                 <div className="expense-margins mb-4">       
                 <h4 className="claret-text open-sans-condensed text-center fw-800"><strong>SELECT FOREIGN CURRENCY</strong></h4>
                 <select name="foreignCurrencyCode" id="foreignCurrencyCode" value={this.state.foreign} onChange={this.onChangeForeign} className="format-input expense-margins mb-3">
            <option value="null">Choose currency...</option>
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="AFN">Afghan Afghani</option>
            <option value="ALL">Albanian Lek</option>
            <option value="DZD">Algerian Dinar</option>
            <option value="AOA">Angolan Kwanza</option>
            <option value="ARS">Argentine Peso</option>
            <option value="AMD">Armenian Dram</option>
            <option value="AWG">Aruban Florin</option>
            <option value="AUD">Australian Dollar</option>
            <option value="AZN">Azerbaijani Manat</option>
            <option value="BSD">Bahamian Dollar</option>
            <option value="BHD">Bahraini Dinar</option>
            <option value="BDT">Bangladeshi Taka</option>
            <option value="BBD">Barbadian Dollar</option>
            <option value="BYR">Belarusian Ruble</option>
            <option value="BZD">Belize Dollar</option>
            <option value="BMD">Bermudan Dollar</option>
            <option value="BTN">Bhutanese Ngultrum</option>
            <option value="BTC">Bitcoin</option>
            <option value="BOB">Bolivian Boliviano</option>
            <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
            <option value="BWP">Botswanan Pula</option>
            <option value="BRL">Brazilian Real</option>
            <option value="BND">Brunei Dollar</option>
            <option value="BGN">Bulgarian Lev</option>
            <option value="BIF">Burundian Franc</option>
            <option value="KHR">Cambodian Riel</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="CVE">Cape Verdean Escudo</option>
            <option value="KYD">Cayman Islands Dollar</option>
            <option value="XOF">CFA Franc BCEAO</option>
            <option value="XAF">CFA Franc BEAC</option>
            <option value="XPF">CFP Franc</option>
            <option value="CLP">Chilean Peso</option>
            <option value="CNY">Chinese Yuan</option>
            <option value="COP">Colombian Peso</option>
            <option value="KMF">Comorian Franc</option>
            <option value="CDF">Congolese Franc</option>
            <option value="CRC">Costa Rican Colón</option>
            <option value="HRK">Croatian Kuna</option>
            <option value="CUC">Cuban Convertible Peso</option>
            <option value="CUP">Cuban Peso</option>
            <option value="CZK">Czech Republic Koruna</option>
            <option value="DKK">Danish Krone</option>
            <option value="DJF">Djiboutian Franc</option>
            <option value="DOP">Dominican Peso</option>
            <option value="XCD">East Caribbean Dollar</option>
            <option value="EGP">Egyptian Pound</option>
            <option value="ERN">Eritrean Nakfa</option>
            <option value="ETB">Ethiopian Birr</option>
            <option value="FKP">Falkland Islands Pound</option>
            <option value="FJD">Fijian Dollar</option>
            <option value="GMD">Gambian Dalasi</option>
            <option value="GEL">Georgian Lari</option>
            <option value="GHS">Ghanaian Cedi</option>
            <option value="GIP">Gibraltar Pound</option>
            <option value="GTQ">Guatemalan Quetzal</option>
            <option value="GNF">Guinean Franc</option>
            <option value="GYD">Guyanaese Dollar</option>
            <option value="HTG">Haitian Gourde</option>
            <option value="HNL">Honduran Lempira</option>
            <option value="HKD">Hong Kong Dollar</option>
            <option value="HUF">Hungarian Forint</option>
            <option value="ISK">Icelandic Króna</option>
            <option value="INR">Indian Rupee</option>
            <option value="IDR">Indonesian Rupiah</option>
            <option value="IRR">Iranian Rial</option>
            <option value="IQD">Iraqi Dinar</option>
            <option value="ILS">Israeli New Sheqel</option>
            <option value="JMD">Jamaican Dollar</option>
            <option value="JPY">Japanese Yen</option>
            <option value="JOD">Jordanian Dinar</option>
            <option value="KZT">Kazakhstani Tenge</option>
            <option value="KES">Kenyan Shilling</option>
            <option value="KWD">Kuwaiti Dinar</option>
            <option value="KGS">Kyrgystani Som</option>
            <option value="LAK">Laotian Kip</option>
            <option value="LVL">Latvian Lats</option>
            <option value="LBP">Lebanese Pound</option>
            <option value="LSL">Lesotho Loti</option>
            <option value="LRD">Liberian Dollar</option>
            <option value="LYD">Libyan Dinar</option>
            <option value="LTL">Lithuanian Litas</option>
            <option value="MOP">Macanese Pataca</option>
            <option value="MKD">Macedonian Denar</option>
            <option value="MGA">Malagasy Ariary</option>
            <option value="MWK">Malawian Kwacha</option>
            <option value="MYR">Malaysian Ringgit</option>
            <option value="MVR">Maldivian Rufiyaa</option>
            <option value="MRO">Mauritanian Ouguiya</option>
            <option value="MUR">Mauritian Rupee</option>
            <option value="MXN">Mexican Peso</option>
            <option value="MDL">Moldovan Leu</option>
            <option value="MNT">Mongolian Tugrik</option>
            <option value="MAD">Moroccan Dirham</option>
            <option value="MZM">Mozambican Metical</option>
            <option value="MMK">Myanmar Kyat</option>
            <option value="NAD">Namibian Dollar</option>
            <option value="NPR">Nepalese Rupee</option>
            <option value="ANG">Netherlands Antillean Guilder</option>
            <option value="TWD">New Taiwan Dollar</option>
            <option value="NZD">New Zealand Dollar</option>
            <option value="NIO">Nicaraguan Córdoba</option>
            <option value="NGN">Nigerian Naira</option>
            <option value="KPW">North Korean Won</option>
            <option value="NOK">Norwegian Krone</option>
            <option value="OMR">Omani Rial</option>
            <option value="PKR">Pakistani Rupee</option>
            <option value="PAB">Panamanian Balboa</option>
            <option value="PGK">Papua New Guinean Kina</option>
            <option value="PYG">Paraguayan Guarani</option>
            <option value="PEN">Peruvian Nuevo Sol</option>
            <option value="PHP">Philippine Peso</option>
            <option value="PLN">Polish Zloty</option>
            <option value="QAR">Qatari Rial</option>
            <option value="RON">Romanian Leu</option>
            <option value="RUB">Russian Ruble</option>
            <option value="RWF">Rwandan Franc</option>
            <option value="SVC">Salvadoran Colón</option>
            <option value="WST">Samoan Tala</option>
            <option value="SAR">Saudi Riyal</option>
            <option value="RSD">Serbian Dinar</option>
            <option value="SCR">Seychellois Rupee</option>
            <option value="SLL">Sierra Leonean Leone</option>
            <option value="SGD">Singapore Dollar</option>
            <option value="SBD">Solomon Islands Dollar</option>
            <option value="SOS">Somali Shilling</option>
            <option value="ZAR">South African Rand</option>
            <option value="KRW">South Korean Won</option>
            <option value="XDR">Special Drawing Rights</option>
            <option value="LKR">Sri Lankan Rupee</option>
            <option value="SHP">St. Helena Pound</option>
            <option value="SDG">Sudanese Pound</option>
            <option value="SRD">Surinamese Dollar</option>
            <option value="SZL">Swazi Lilangeni</option>
            <option value="SEK">Swedish Krona</option>
            <option value="CHF">Swiss Franc</option>
            <option value="SYP">Syrian Pound</option>
            <option value="STD">São Tomé and Príncipe Dobra</option>
            <option value="TJS">Tajikistani Somoni</option>
            <option value="TZS">Tanzanian Shilling</option>
            <option value="THB">Thai Baht</option>
            <option value="TOP">Tongan pa'anga</option>
            <option value="TTD">Trinidad & Tobago Dollar</option>
            <option value="TND">Tunisian Dinar</option>
            <option value="TRY">Turkish Lira</option>
            <option value="TMT">Turkmenistani Manat</option>
            <option value="UGX">Ugandan Shilling</option>
            <option value="UAH">Ukrainian Hryvnia</option>
            <option value="AED">United Arab Emirates Dirham</option>
            <option value="UYU">Uruguayan Peso</option>
            <option value="UZS">Uzbekistan Som</option>
            <option value="VUV">Vanuatu Vatu</option>
            <option value="VEF">Venezuelan BolÃ­var</option>
            <option value="VND">Vietnamese Dong</option>
            <option value="YER">Yemeni Rial</option>
            <option value="ZMK">Zambian Kwacha</option>
                 </select>
                 </div>
                 <div className="expense-margins mb-4">
                 <h4 className="claret-text open-sans-condensed text-center fw-800"><strong>SELECT HOME CURRENCY</strong></h4>
                 <select name="homeCurrencyCode" id="homeCurrencyCode" value={this.state.home} onChange={this.onChangeHome} className="format-input expense-margins mb-3">
            <option value="null">Choose currency...</option>
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="AFN">Afghan Afghani</option>
            <option value="ALL">Albanian Lek</option>
            <option value="DZD">Algerian Dinar</option>
            <option value="AOA">Angolan Kwanza</option>
            <option value="ARS">Argentine Peso</option>
            <option value="AMD">Armenian Dram</option>
            <option value="AWG">Aruban Florin</option>
            <option value="AUD">Australian Dollar</option>
            <option value="AZN">Azerbaijani Manat</option>
            <option value="BSD">Bahamian Dollar</option>
            <option value="BHD">Bahraini Dinar</option>
            <option value="BDT">Bangladeshi Taka</option>
            <option value="BBD">Barbadian Dollar</option>
            <option value="BYR">Belarusian Ruble</option>
            <option value="BZD">Belize Dollar</option>
            <option value="BMD">Bermudan Dollar</option>
            <option value="BTN">Bhutanese Ngultrum</option>
            <option value="BTC">Bitcoin</option>
            <option value="BOB">Bolivian Boliviano</option>
            <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
            <option value="BWP">Botswanan Pula</option>
            <option value="BRL">Brazilian Real</option>
            <option value="BND">Brunei Dollar</option>
            <option value="BGN">Bulgarian Lev</option>
            <option value="BIF">Burundian Franc</option>
            <option value="KHR">Cambodian Riel</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="CVE">Cape Verdean Escudo</option>
            <option value="KYD">Cayman Islands Dollar</option>
            <option value="XOF">CFA Franc BCEAO</option>
            <option value="XAF">CFA Franc BEAC</option>
            <option value="XPF">CFP Franc</option>
            <option value="CLP">Chilean Peso</option>
            <option value="CNY">Chinese Yuan</option>
            <option value="COP">Colombian Peso</option>
            <option value="KMF">Comorian Franc</option>
            <option value="CDF">Congolese Franc</option>
            <option value="CRC">Costa Rican Colón</option>
            <option value="HRK">Croatian Kuna</option>
            <option value="CUC">Cuban Convertible Peso</option>
            <option value="CUP">Cuban Peso</option>
            <option value="CZK">Czech Republic Koruna</option>
            <option value="DKK">Danish Krone</option>
            <option value="DJF">Djiboutian Franc</option>
            <option value="DOP">Dominican Peso</option>
            <option value="XCD">East Caribbean Dollar</option>
            <option value="EGP">Egyptian Pound</option>
            <option value="ERN">Eritrean Nakfa</option>
            <option value="ETB">Ethiopian Birr</option>
            <option value="FKP">Falkland Islands Pound</option>
            <option value="FJD">Fijian Dollar</option>
            <option value="GMD">Gambian Dalasi</option>
            <option value="GEL">Georgian Lari</option>
            <option value="GHS">Ghanaian Cedi</option>
            <option value="GIP">Gibraltar Pound</option>
            <option value="GTQ">Guatemalan Quetzal</option>
            <option value="GNF">Guinean Franc</option>
            <option value="GYD">Guyanaese Dollar</option>
            <option value="HTG">Haitian Gourde</option>
            <option value="HNL">Honduran Lempira</option>
            <option value="HKD">Hong Kong Dollar</option>
            <option value="HUF">Hungarian Forint</option>
            <option value="ISK">Icelandic Króna</option>
            <option value="INR">Indian Rupee</option>
            <option value="IDR">Indonesian Rupiah</option>
            <option value="IRR">Iranian Rial</option>
            <option value="IQD">Iraqi Dinar</option>
            <option value="ILS">Israeli New Sheqel</option>
            <option value="JMD">Jamaican Dollar</option>
            <option value="JPY">Japanese Yen</option>
            <option value="JOD">Jordanian Dinar</option>
            <option value="KZT">Kazakhstani Tenge</option>
            <option value="KES">Kenyan Shilling</option>
            <option value="KWD">Kuwaiti Dinar</option>
            <option value="KGS">Kyrgystani Som</option>
            <option value="LAK">Laotian Kip</option>
            <option value="LVL">Latvian Lats</option>
            <option value="LBP">Lebanese Pound</option>
            <option value="LSL">Lesotho Loti</option>
            <option value="LRD">Liberian Dollar</option>
            <option value="LYD">Libyan Dinar</option>
            <option value="LTL">Lithuanian Litas</option>
            <option value="MOP">Macanese Pataca</option>
            <option value="MKD">Macedonian Denar</option>
            <option value="MGA">Malagasy Ariary</option>
            <option value="MWK">Malawian Kwacha</option>
            <option value="MYR">Malaysian Ringgit</option>
            <option value="MVR">Maldivian Rufiyaa</option>
            <option value="MRO">Mauritanian Ouguiya</option>
            <option value="MUR">Mauritian Rupee</option>
            <option value="MXN">Mexican Peso</option>
            <option value="MDL">Moldovan Leu</option>
            <option value="MNT">Mongolian Tugrik</option>
            <option value="MAD">Moroccan Dirham</option>
            <option value="MZM">Mozambican Metical</option>
            <option value="MMK">Myanmar Kyat</option>
            <option value="NAD">Namibian Dollar</option>
            <option value="NPR">Nepalese Rupee</option>
            <option value="ANG">Netherlands Antillean Guilder</option>
            <option value="TWD">New Taiwan Dollar</option>
            <option value="NZD">New Zealand Dollar</option>
            <option value="NIO">Nicaraguan Córdoba</option>
            <option value="NGN">Nigerian Naira</option>
            <option value="KPW">North Korean Won</option>
            <option value="NOK">Norwegian Krone</option>
            <option value="OMR">Omani Rial</option>
            <option value="PKR">Pakistani Rupee</option>
            <option value="PAB">Panamanian Balboa</option>
            <option value="PGK">Papua New Guinean Kina</option>
            <option value="PYG">Paraguayan Guarani</option>
            <option value="PEN">Peruvian Nuevo Sol</option>
            <option value="PHP">Philippine Peso</option>
            <option value="PLN">Polish Zloty</option>
            <option value="QAR">Qatari Rial</option>
            <option value="RON">Romanian Leu</option>
            <option value="RUB">Russian Ruble</option>
            <option value="RWF">Rwandan Franc</option>
            <option value="SVC">Salvadoran Colón</option>
            <option value="WST">Samoan Tala</option>
            <option value="SAR">Saudi Riyal</option>
            <option value="RSD">Serbian Dinar</option>
            <option value="SCR">Seychellois Rupee</option>
            <option value="SLL">Sierra Leonean Leone</option>
            <option value="SGD">Singapore Dollar</option>
            <option value="SBD">Solomon Islands Dollar</option>
            <option value="SOS">Somali Shilling</option>
            <option value="ZAR">South African Rand</option>
            <option value="KRW">South Korean Won</option>
            <option value="XDR">Special Drawing Rights</option>
            <option value="LKR">Sri Lankan Rupee</option>
            <option value="SHP">St. Helena Pound</option>
            <option value="SDG">Sudanese Pound</option>
            <option value="SRD">Surinamese Dollar</option>
            <option value="SZL">Swazi Lilangeni</option>
            <option value="SEK">Swedish Krona</option>
            <option value="CHF">Swiss Franc</option>
            <option value="SYP">Syrian Pound</option>
            <option value="STD">São Tomé and Príncipe Dobra</option>
            <option value="TJS">Tajikistani Somoni</option>
            <option value="TZS">Tanzanian Shilling</option>
            <option value="THB">Thai Baht</option>
            <option value="TOP">Tongan pa'anga</option>
            <option value="TTD">Trinidad & Tobago Dollar</option>
            <option value="TND">Tunisian Dinar</option>
            <option value="TRY">Turkish Lira</option>
            <option value="TMT">Turkmenistani Manat</option>
            <option value="UGX">Ugandan Shilling</option>
            <option value="UAH">Ukrainian Hryvnia</option>
            <option value="AED">United Arab Emirates Dirham</option>
            <option value="UYU">Uruguayan Peso</option>
            <option value="UZS">Uzbekistan Som</option>
            <option value="VUV">Vanuatu Vatu</option>
            <option value="VEF">Venezuelan BolÃ­var</option>
            <option value="VND">Vietnamese Dong</option>
            <option value="YER">Yemeni Rial</option>
            <option value="ZMK">Zambian Kwacha</option>
                 </select>
                 </div>
                 <div className="expense-margins mb-4">
                 <h4 className="claret-text open-sans-condensed text-center fw-800"><strong>HOW DOES YOUR BANK CALCULATE<br></br> FOREIGN TRANSACTION FEES?</strong></h4>
                  <select name="bankFeeType" id="bankFeeType" value={this.state.bankFee} onChange={this.onChangeFee} className="format-input expense-margins mb-3">
                   <option value="null">Choose type...</option>
                   <option value="fixed">Fixed Fee</option>
                   <option value="percentage">Percentage of Total</option>
                   <option value="both">Fixed Fee + Percentage</option>
                   <option value="no-fees">Don't Calculate Bank Fees</option>
                   </select>
                   <BankFeeHandler value={this.state.bankFee}/>
                </div>
                 <div className="text-center expense-margins mx-auto">
                 <button style={{paddingTop: "15px", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px"}} className="nav-menu-buttons" type="submit">SAVE SETTINGS</button>
                    </div>
                   </form>
                  </div>
                 </Col>
               </Row>    
             </div>
             <div style={{height: "175px"}}></div>
           </Container>
      </div>
    );
  } 
}

export default UserSettings;
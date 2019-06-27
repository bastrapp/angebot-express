var bankImages = {
    "ING" : "https://www.interhyp.de/home/ihyp/resources/ihyp/images/providerLogos/ing.png",
    "Commerzbank AG" : "https://www.interhyp.de/home/ihyp/resources/ihyp/images/providerLogos/commerzbank.png",
    "Allianz Lebensversicherungs AG" : "https://www.interhyp.de/home/ihyp/resources/ihyp/images/providerLogos/allianz.png"
}


function createOffer(result) {
  result.json().then(r => show_zinscheck(r));
}

function offer_html(offer) {


  var bankName = offer.bankDetails.bankName;

 var image = bankImages[offer.bankDetails.bankName];
    console.log("img: " + image);
 if(image) {
   console.log("bid anpassen: " + image);

    bankName = "<img src='"+image+"' width='130' height='50' />";
 } else {
  //bankName = bankName.substr(0,7);
}

 return "<tr >" +
           "<td>"+ bankName + "</td>" +
           "<td style='font-size:16pt; width:70px' >"  +offer.effectiveInterest + "% </td>" +
           "<td style='font-size:16pt;'>"  +offer.monthlyPayment  +"€</td>" +
	"</tr>";
}

function show_zinscheck(offers) {
  console.log(offers[0]);
  //var offers = JSON.parse(result.text());

  var offer = offers[0];
  var offerHtml = "<table>" + offer_html(offers[0]) +  offer_html(offers[1]) +  offer_html(offers[2]) + "</table>";

  console.log(offer);

  var box = document.getElementById('is24-banner_right_1')
  box.innerHTML = "<div id='interhyp-box' onClick=\"window.open('https://www.interhyp.de/home/#/marketoverview')\"> <img src='https://www.interhyp.de/interhyp-assets/images/logo-svg.svg?1537357864'/><br>" + offerHtml+ " <br> basiert auf ihren Daten in Interhyp Home</div>"
}

var yearlyHouseholdIncome = 0;
var downPayment = 0;

var thingsToDoBeforeQuery = 2;

chrome.storage.local.get(['yearlyHouseholdIncome'], function(result) {
  yearlyHouseholdIncome = result.yearlyHouseholdIncome;
  oneThingDone();
  });
chrome.storage.local.get(['downPayment'], function(result) {
  downPayment = result.downPayment;
  oneThingDone();
  });

function oneThingDone() {
  thingsToDoBeforeQuery--;
  if (thingsToDoBeforeQuery == 0) {
    doQuery();
  }
}

var queryParameter = "";

function addQueryParam(key, value) {
    if (queryParameter != "") {
      queryParameter += "&";
    }
    queryParameter += key + "=" + value;
}

function doQuery() {

  var loanAmount = get_price();
  var brokerCosts = 30000;
  var notaryCosts = 15000;
  var transferTax = 30000;

  addQueryParam("estate.zip", get_zip());
//  addQueryParam("estate.city", "");
//  addQueryParam("estate.federalState", !!!!);
//  addQueryParam("mainApplicant.zip", "");
//  addQueryParam("mainApplicant.city", "");
//  addQueryParam("mainApplicant.federalState", "");
  addQueryParam("mainApplicant.netSalary", yearlyHouseholdIncome);
  addQueryParam("capital.equityCash", downPayment);
  addQueryParam("venture.reason", "KaufBest");
  addQueryParam("venture.priceBuilding", get_price());
  //  addQueryParam("venture.percentageBroker", get_zip);
  addQueryParam("venture.shownFunding.equityCash", downPayment);
  addQueryParam("venture.shownFunding.loans.0.amount", loanAmount);
//  addQueryParam("venture.shownFunding.loans.0.maturity", 15);
//  addQueryParam("venture.shownFunding.loans.0.fullRepayment", false);
//  addQueryParam("venture.shownFunding.loans.0.amortisation", 4);
  addQueryParam("venture.brokerCosts", brokerCosts);
  addQueryParam("venture.notaryCosts", notaryCosts);
  addQueryParam("venture.transferTax", transferTax);
//  addQueryParam("venture.handling", notaryCosts);
  addQueryParam("venture.calledBy", "interhypNext");
  addQueryParam("numberOfResults", 3);

  fetch("https://ls-hack.azurewebsites.net/interest?" + queryParameter).then(r=>createOffer(r));
}

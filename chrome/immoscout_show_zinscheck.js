var bankImages = {
    "ING" : "https://www.interhyp.de/home/ihyp/resources/ihyp/images/providerLogos/ing.png",
    "Commerzbank AG" : "https://www.interhyp.de/home/ihyp/resources/ihyp/images/providerLogos/commerzbank.png",
    "Allianz Lebensversicherungs AG" : "https://www.interhyp.de/home/ihyp/resources/ihyp/images/providerLogos/allianz.png"
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

function show_zinscheck(result) {
var offers = JSON.parse(result);

var offer= offers[0];
var offerHtml = "<table>" + offer_html(offers[0]) +  offer_html(offers[1]) +  offer_html(offers[2]) + "</table>";

console.log(offer);

var box = document.getElementById('is24-banner_right_1')
box.innerHTML = "<div id='interhyp-box' onClick=\"window.open('https://www.interhyp.de/home/#/marketoverview')\"> <img src='https://www.interhyp.de/interhyp-assets/images/logo-svg.svg?1537357864'/><br>" + offerHtml+ " <br> basiert auf ihren Daten in Interhyp Home</div>"
}

chrome.storage.local.get(['yearlyHouseholdIncome'], showIncome);
chrome.storage.local.get(['downPayment'], showIncome);

fetch("https://ls-hack.azurewebsites.net/interest").then(r=>console.log(r));

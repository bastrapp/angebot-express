
function offer_html(offer) {
 return "<div style='display: table-row'>" + 
           "<div style='display: table-cell;'>"+ offer.bankDetails.bankName + "</div>" +
           "<div style='display: table-cell;'>"  +offer.effectiveInterest + "</div>" +
	"</div>";
}

function show_zinscheck(result) {
var offers = JSON.parse(result);

var offer= offers[0];
var offerHtml = offer_html(offers[0]) +  offer_html(offers[1]) +  offer_html(offers[2]) ;

console.log(offer);

var box = document.getElementById('is24-banner_right_1')
box.innerHTML = "<div id='interhyp-box'>" + offerHtml+ "</div>"
}





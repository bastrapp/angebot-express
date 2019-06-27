

var box = document.getElementById('is24-banner_right_1')

box.innerHTML = "<div id='interhyp-box'>This element costs " + get_price() + " and is in following zip code " + get_zip() + "</div>"


function showIncome(result) {
  console.log("INCOME -->", result);
}
chrome.storage.local.get(['yearlyHouseholdIncome'], showIncome);
chrome.storage.local.get(['downPayment'], showIncome);

console.log("income");

fetch("https://ls-hack.azurewebsites.net/interest").then(r=>console.log(r));

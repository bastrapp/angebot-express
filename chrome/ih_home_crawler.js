
function sleep(milliseconds) {
 return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function lookForIncome(aTags) {
  var searchTextIncome = "Lohn und Gehalt (netto)";
  var searchTextIncomeNumber = "Anzahl Monatsgehälter (Jahr)";
  var totalIncome = 0;

  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent == searchTextIncome) {
      var incomeParent = aTags[i].parentNode;
      var incomeInput = incomeParent.getElementsByTagName("input")[0].value;
      var incomeValueMonthly = parseInt(incomeInput.substr(0, incomeInput.length - 2).replace('.',''))

      var incomeNumberValue = 12;

      var incomeNumberLabels = incomeParent.parentNode.getElementsByTagName("label");
      for (var j=0; j < incomeNumberLabels.length; j++) {
        if (incomeNumberLabels[j].textContent == searchTextIncomeNumber) {
          incomeNumberValue = parseInt(incomeNumberLabels[j].parentNode.getElementsByTagName("input")[0].value);
        }
      }
      var yearlyIncome = incomeValueMonthly * incomeNumberValue;
      totalIncome += yearlyIncome;
    }
  }
  chrome.storage.local.set({"yearlyHouseholdIncome": totalIncome});
}

function lookForDownPayment(aTags) {
  var searchTextDownPayment = "Eigenkapital";
  var downPayment = 0;

  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent == searchTextDownPayment) {
      var downPaymentParent = aTags[i].parentNode;
      var downPaymentInput = downPaymentParent.getElementsByTagName("span")[0].textContent;
      downPayment = parseInt(downPaymentInput.substr(2, downPaymentInput.length - 2).replace('.',''))
    }
  }
  chrome.storage.local.set({"downPayment": downPayment});
}

async function pollForValues() {
  while (true) {
    var aTags = document.getElementsByTagName("label");
    lookForIncome(aTags);
    lookForDownPayment(aTags);
    console.log("Looking around for income");
      await sleep(2000);
    }
}

pollForValues();

var fun = function()
{ 
  if (document.getElementById("ext-element-342")) 
  {
    console.log("clickin on marktueberblick");
    setTimeout( function() 
    {
      document.getElementById("ext-element-342").click();
    },200 );
  } else 
  { 
    console.log("still waiting for marktueberblick button");
    setTimeout(fun, 100);
  } 
}

fun();


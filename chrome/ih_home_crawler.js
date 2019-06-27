
function getIncome() {
  document.getElementsBy

  chrome.storage.local.set({key: value}, function() {
    console.log('Value is set to ' + value);
  });

  chrome.storage.local.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });
  return parseInt(document.getElementsByClassName('is24qa-kaufpreis')[0].innerText.replace('.','').replace('.',''));
};

console.log("doing it");


function sleep(milliseconds) {
 return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function lookForIncome() {
  var aTags = document.getElementsByTagName("label");
  var searchText = "Lohn und Gehalt (netto)";
  var inputs = [];

  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent == searchText) {
      var incomeInput = aTags[i].parentNode.getElementsByTagName("input")[0].value;
      console.log(incomeInput, incomeInput.substr(0, incomeInput.length - 2));
      var incomeValue = parseInt(incomeInput.substr(0, incomeInput.length - 2).replace('.',''))
      console.log(incomeValue);
      inputs.push(aTags[i]);
      console.log(inputs);
    }
  }

}

async function pollSincePageLoaded() {
  while (true) {
      console.log("looking around");

      lookForIncome();

      console.log("sleeping")
      await sleep(1000);
    }
}

pollSincePageLoaded();

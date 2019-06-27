function get_price() {
  return parseInt(document.getElementsByClassName('is24qa-kaufpreis')[0].innerText.replace('.','').replace('.',''));
};

function get_zip() {
  return parseInt(document.getElementsByClassName('zip-region-and-country')[0].innerText);
};


console.log ("Preis: " + get_price());
console.log ("Zip: " + get_zip());



//crawler({
//  "price": get_price(),
//  "zip": get_zip()
//}).then(r => console.log(r));

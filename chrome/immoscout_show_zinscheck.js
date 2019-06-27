

var box = document.getElementById('is24-banner_right_1')

box.innerHTML = "<div id='interhyp-box'>This element costs " + get_price() + " and is in following zip code " + get_zip() + "</div>"

fetch("https://www.biallo.de/vergleiche/bauen/baugeld/nc/",
        {"credentials":"include","headers":{"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3","accept-language":"de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7,pt;q=0.6","cache-control":"max-age=0","content-type":"application/x-www-form-urlencoded","upgrade-insecure-requests":"1"},"referrer":"https://www.biallo.de/vergleiche/bauen/baugeld/nc/?kb=200.000&AnzJ=10&tilg=2.5+&bquo=100&plz=81247&mitFin=0&nnDK=1&sortID=&maxGesTab=999&detrechner=baugeld&lS=1&Seite=1&no_cache=1","referrerPolicy":"no-referrer-when-downgrade","body":"kb=200.000&AnzJ=10&tilg=2.5+&bquo=100&plz=81247&mkS=1&mitFin=0&nnDK=1&sortID=&maxGesTab=999&detrechner=baugeld&lS=1&Seite=0","method":"POST","mode":"cors"})
        .then(response => response.json() )
        .then(data => console.log(data))

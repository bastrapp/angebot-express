const urlAPI = "https://www.interhyp.de/customer-portal/api/interestcalculator/v1/marketOverview";

var crawler = function(inputFields){

    return  fetch(urlAPI, {
        method: 'POST',
        headers: {
            "accept":"application/json, text/plain, */*",
            "accept-language":"de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7,pt;q=0.6",
            "content-type":"application/json",
            "x-xsrf-token":"d2929c7d-e1b2-4f58-a6de-57c87354632d",
            "referrer":"https://www.interhyp.de/zins-check/",
            "referrerPolicy":"no-referrer-when-downgrade"
        },
        body: "{\"caseDto\":{\"estate\":{\"zip\":\"81245\",\"city\":\"München\",\"federalState\":\"DE-BY\"},\"mainApplicant\":{\"zip\":\"\",\"city\":\"\",\"federalState\":\"\",\"netSalary\":0},\"capital\":{\"equityCash\":150000},\"venture\":{\"reason\":\"KaufBest\",\"priceBuilding\":780000,\"percentageBroker\":3.57,\"shownFunding\":{\"equityCash\":150000,\"loans\":[{\"amount\":700746,\"maturity\":15,\"fullRepayment\":false,\"amortisation\":4}]},\"brokerCosts\":27845.999999999996,\"notaryCosts\":15600,\"transferTax\":27300.000000000004},\"handling\":{},\"calledBy\":\"zinscheck18\"},\"numberOfResults\":5}"
    }
    ).then(r=>r.text());
    
}

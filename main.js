/* 
 * main.js
 */

var parseString = require('xml2js').parseString;
var soap = require('soap');
var url = 'http://www.webservicex.net/globalweather.asmx?wsdl';
var args = {CountryName: "Italy"};
soap.createClient(url, function (err, client) {
    client.GetCitiesByCountry(args, function (err, result) {
        console.log("=== XML body === \n" + result.GetCitiesByCountryResult);
        parseString(result.GetCitiesByCountryResult, function (err, json) {
            if (err) {
                console.error("ERROR: " + err);
                return;
            }
            console.log("\n=== JSON body ===\n" + JSON.stringify(json, null, 3));
        });

    });
});
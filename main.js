/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
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
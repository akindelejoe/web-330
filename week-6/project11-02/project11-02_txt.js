"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Joe Akindele
      Date:   April 27 2025

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
    let postal = postalCode.value.trim();
    let countryCode = country.value;

    if (postal && countryCode) {

        let apiUrl = `https://api.zippopotam.us/${countryCode}/${postal}`;


        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Invalid postal code or country");
                }
                return response.json();
            })
            .then(data => {

                if (data.places && data.places.length > 0) {
                    place.value = data.places[0]["place name"];
                    region.value = data.places[0]["state"];
                } else {
                    alert("No data found for the provided postal code.");
                }
            })
            .catch(error => {
                alert("Error: " + error.message);
            });
    }
};

"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Joe Akindele
      Date:   April 5, 2024

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");


let ageGroup = document.getElementById("ageGroup");

let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

document.getElementById("submitButton").addEventListener("click", function () {
      let expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 7); // Set cookie to expire in 7 days
      let expires = "; expires=" + expireDate.toUTCString();

      document.cookie = "riderName=" + encodeURIComponent(riderName.value) + expires;
      document.cookie = "ageGroup=" + encodeURIComponent(ageGroup.value) + expires;
      document.cookie = "bikeOption=" + encodeURIComponent(bikeOption.value) + expires;
      document.cookie = "routeOption=" + encodeURIComponent(routeOption.value) + expires;
      document.cookie = "accOption=" + encodeURIComponent(accOption.value) + expires;
      document.cookie = "region=" + encodeURIComponent(region.value) + expires;
      document.cookie = "miles=" + encodeURIComponent(miles.value) + expires;
      document.cookie = "comments=" + encodeURIComponent(comments.value) + expires;
   
      // Redirect to the second page
      window.location.href = "project09-02b_txt.html";
   });

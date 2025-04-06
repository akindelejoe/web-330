"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: 
      Date:   

      Filename: project09-02b.js
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

function getCookieValue(name) {
      let cookies = document.cookie.split("; ");
      for (let i = 0; i < cookies.length; i++) {
         let parts = cookies[i].split("=");
         if (parts[0] === name) return decodeURIComponent(parts[1]);
      }
      return "";
}
   
document.getElementById("riderName").innerHTML = getCookieValue("riderName");
document.getElementById("ageGroup").innerHTML = getCookieValue("ageGroup");
document.getElementById("bikeOption").innerHTML = getCookieValue("bikeOption");
document.getElementById("routeOption").innerHTML = getCookieValue("routeOption");
document.getElementById("accOption").innerHTML = getCookieValue("accOption");
document.getElementById("region").innerHTML = getCookieValue("region");
document.getElementById("miles").innerHTML = getCookieValue("miles");
document.getElementById("comments").innerHTML = getCookieValue("comments");

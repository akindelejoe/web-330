/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Joe Akindele
  Date:
  Filename: script.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  {
    name : "Yan Cooke", 
    specialty : "Chinese Cuisine",
    weakness : "Steak",
    location : "China",
  }, 

  {
    name : "Tunde Cole", 
    specialty : "Nigerian Cuisine",
    weakness : "Dessert",
    location : "Nigeria",
  },

  {
    name : "Morgana Smith", 
    specialty : "Italian Cuisine",
    weakness : "Jamaican Rice",
    location : "USA",

  }



];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (Math.random() > 0.2) { 
              resolve(chefs[0]);
          } else {
              reject("Failed to fetch Chef 1 data!");
          }
      }, 2000); 
  });
}
// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) { 
                resolve(chefs[1]);
            } else {
                reject("Failed to fetch Chef 2 data!");
            }
        }, 3000); 
    });
}


// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) { 
                resolve(chefs[2]);
            } else {
                reject("Failed to fetch Chef 3 data!");
            }
        }, 4000); 
    });
}


// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
    .then(results => {
        results.forEach((result, index) => {
            const section = document.getElementById(`chef${index + 1}`);
            const dataDiv = section.querySelector('.chef-data');
            
            if (result.status === "fulfilled") {
                const chef = result.value;
                dataDiv.innerHTML = `
                    <p><strong>Name:</strong> ${chef.name}</p>
                    <p><strong>Specialty:</strong> ${chef.specialty}</p>
                    <p><strong>Weakness:</strong> ${chef.weakness}</p>
                    <p><strong>Location:</strong> ${chef.location}</p>
                `;
            } else {
                dataDiv.innerHTML = `<p style="color: red;">Error: ${result.reason}</p>`;
            }
        });
    });
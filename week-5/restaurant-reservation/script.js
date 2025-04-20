/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Joe Akindele
  Date: 20-April-2025
  Filename: Restaurant Reservation
*/


let tables = [
  { tableNumber: 1, capacity: 2, isReserved: false },
  { tableNumber: 2, capacity: 4, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: false },
  { tableNumber: 5, capacity: 2, isReserved: false }
];


function reserveTable(tableNumber, callback, time) {
  const table = tables.find(t => t.tableNumber === tableNumber);
  if (!table) {
    callback(`Table ${tableNumber} does not exist.`);
    return;
  }

  if (table.isReserved) {
    callback(`Sorry, table ${tableNumber} is already reserved.`);
  } else {
    table.isReserved = true;

 
    setTimeout(() => {
      callback(`Success! Table ${tableNumber} has been reserved.`);
    }, time);
  }
}


document.getElementById("reservationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const tableNumber = parseInt(document.getElementById("tableNumber").value);
    const messageEl = document.getElementById("message");

  
    if (!name || isNaN(tableNumber)) {
      messageEl.textContent = "Please enter your name and a valid table number.";
      return;
    }

   
    reserveTable(tableNumber, function (message) {
      messageEl.textContent = `${name}, ${message}`;
    }, 3000);
  });

"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: 
      Date:   

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
let timer = {
      minutes: 1,
      seconds: 15,
      running: false,
      interval: null,
   
      start: function() {
         if (!this.running) {
            this.running = true;
            this.interval = setInterval(() => {
               if (this.seconds === 0 && this.minutes === 0) {
                  this.stop();
                  alert("Time's up!");
               } else {
                  if (this.seconds === 0) {
                     this.minutes--;
                     this.seconds = 59;
                  } else {
                     this.seconds--;
                  }
                  updateDisplay();
               }
            }, 1000);
         }
      },
   
      stop: function() {
         this.running = false;
         clearInterval(this.interval);
      }
   };
/*---------------Interface Code -----------------*/
function updateDisplay() {
      minBox.value = timer.minutes;
      secBox.value = timer.seconds;
   }
   
   runPauseButton.addEventListener("click", function() {
      if (timer.running) {
         timer.stop();
      } else {
         timer.minutes = parseInt(minBox.value, 10);
         timer.seconds = parseInt(secBox.value, 10);
         timer.start();
      }
   });

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");


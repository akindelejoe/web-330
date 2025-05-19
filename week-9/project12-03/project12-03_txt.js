"use strict";
/* JavaScript 7th Edition
   Chapter 12
   Project 12-03
   Project to show a recipe with expanding/contracting content
   Author: Joe Akindele
   Date:   May 18 2025
   Filename: project12-03.js
*/

$(document).ready(function () {
   $("ul, ol").hide();

$("h2").click(function () {
      $(this).next().slideToggle();

      let icon = $(this).children("img");

      let src = icon.attr("src");
      if (src === "plus.png") {
         icon.attr("src", "minus.png");
         icon.attr("alt", "minus");
      } else {
         icon.attr("src", "plus.png");
         icon.attr("alt", "plus");
      }
   });
});

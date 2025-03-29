/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author:Joe Akindele
  Date: 29 March 2025
  Filename:script.js
*/

"use strict";


  // TODO: Implement this function
  function createCharacter(name, gender, characterClass) {
    let character = {
      name: name,
      gender: gender,
      characterClass: characterClass,
      describe() {
        return `Meet ${this.name}, a ${this.gender} ${this.characterClass} ready for adventure!`;
      },
    };
    return character;
  }
  
  document.getElementById("generateHero").addEventListener("click", function (e) {
    e.preventDefault();
  
    // Get form values
    let heroName = document.getElementById("heroName").value;
    let heroGender = document.getElementById("heroGender").value;
    let heroClass = document.getElementById("heroClass").value;
  
    console.log("Hero Name:", heroName);
    console.log("Hero Gender:", heroGender);
    console.log("Hero Class:", heroClass);
  

// TODO: Create character
  if (heroName && heroGender && heroClass) {
    let hero = createCharacter(heroName, heroGender, heroClass);
  
  // TODO: Display character information
  document.getElementById("characterOutput").innerText = hero.describe();
} else {
  document.getElementById("characterOutput").innerText = "Hero not selected!";
}
});


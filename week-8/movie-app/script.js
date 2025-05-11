/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Joe Akindele
  Date: May 11 2025
  Filename:
*/

"use strict";

const movies = [
  {
    title: "Harry Potter",
    director: "Chris Columbus", 
    releaseYear: 2001,
    synopsis: "An orphaned boy discovers he's a wizard and attends a magical school called Hogwarts."
  },
  {
    title: "Mad Max",
    director: "George Miller",
    releaseYear: 1979,
    synopsis: "In a dystopian future, a vengeful policeman goes after a violent motorcycle gang that killed his family."
  },
  {
    title: "Apocalypto",
    director: "Mel Gibson",
    releaseYear: 2006,
    synopsis: "As the Mayan civilization declines, a young man is captured for sacrifice and must escape to save his family."
  }
];

function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = movies.find(
        movie => movie.title.toLowerCase() === title.toLowerCase()
      );
      if (found) {
        resolve(found);
      } else {
        reject("Movie not found. Please try another title.");
      }
    }, 1000); // simulate 1-second delay
  });
}

async function displayMovie(event) {
  event.preventDefault();
  const input = document.getElementById("title-input").value.trim();
  const titleEl = document.getElementById("movie-title");
  const directorEl = document.getElementById("movie-director");
  const yearEl = document.getElementById("movie-year");
  const synopsisEl = document.getElementById("movie-synopsis");
  const errorEl = document.getElementById("error-message");


  titleEl.textContent = "";
  directorEl.textContent = "";
  yearEl.textContent = "";
  synopsisEl.textContent = "";
  errorEl.textContent = "";

  try {
    const movie = await fetchMovie(input);
    titleEl.textContent = movie.title;
    directorEl.textContent = `Director: ${movie.director}`;
    yearEl.textContent = `Release Year: ${movie.releaseYear}`;
    synopsisEl.textContent = `Synopsis: ${movie.synopsis}`;
  } catch (error) {
    errorEl.textContent = error;
  }
}

document.getElementById("movie-form").addEventListener("submit", displayMovie);

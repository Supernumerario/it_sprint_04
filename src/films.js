// Import the movies data (just for testing)
// import {data} from "./data.js";

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let data = new Map(Object.entries(array));
  let directors = [];
  data.forEach((value) => {
    directors.push(value.director);
  });
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let moviesFromDirector = array.filter(movie => movie.director === director);
  return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = array.filter(movie => movie.director === director);
  const initialValue = 0;
  let scoresTotal = moviesFromDirector.reduce(
    (accumulator, currentValue) => accumulator + currentValue.score,
    initialValue
  );
  let averageScore = scoresTotal / moviesFromDirector.length;
  return averageScore;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let data = new Map(Object.entries(array));
  let alphabetMovies = [];
  data.forEach((value) => {
    alphabetMovies.push(value.title);
  });
  alphabetMovies.sort();

  // Should return the top 20 after ordering them alphabetically
  if (alphabetMovies.length > 20) {
    let slicedAlphabetMovies = alphabetMovies.slice(0, 20);
    return slicedAlphabetMovies;
  } else {
    return alphabetMovies;
  }
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

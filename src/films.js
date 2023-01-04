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
function orderByYear(array) {
  let moviesByYear = [...array];

  function compareYears(a, b) {
    if (a.year < b.year) { return -1; }
    if (a.year > b.year) { return 1; }
    else return 0;
  }
  moviesByYear.sort(compareYears);

  function compareTitles(a, b) {
    if (a.year == b.year) { 
      if (a.title < b.title) { return -1; }  
      if (a.title > b.title) { return 1; }  
      else return 0;
    }
  }
  moviesByYear.sort(compareTitles);

  return moviesByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let moviesFromGenre = array.filter(movie => movie.genre.includes(genre));
  let moviesWithScore = moviesFromGenre.filter(movie => movie.score);
  const initialValue = 0;
  let scoresTotal = moviesWithScore.reduce(
    (accumulator, currentValue) => accumulator + currentValue.score,
    initialValue
  );
  let averageScore = scoresTotal / moviesWithScore.length;
  return averageScore;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  // Create a copy of the original objects array
  let arrayCopy = array.map(movie => {
    let movieCopy = {...movie};
    return movieCopy;
  });

  // Map the new array
  let resultArray = new Map(Object.entries(arrayCopy));

  // Convert time to minutes
  resultArray.forEach((value) => {
    let time = value.duration;
    let hoursMinutes = time.split(' ');
    let hours = hoursMinutes[0].slice(0, -1);
    if (hoursMinutes[1]) {
      let minutes = hoursMinutes[1].slice(0, -3);
      let totalMinutes = hours * 60 + parseInt(minutes);
      value.duration = totalMinutes;
    } else {
      let totalMinutes = hours * 60;
      value.duration = parseInt(totalMinutes);
    }
  });

  // Convert the map to an array of objects
  const finalData = Array.from(arrayCopy);
  return finalData;

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

/**
 * File: part2.js
 * Version: 1.0.0
 * Author: Aidan Maizels
 * Date created: 22/08/2025
 * Date last modified: 22/08/2025
 * Description: This is a program which uses a range of algorithms to operate an object with given input. 
 */

// Question 1: Build an object called “myMovie” with the following properties and data.
// •	Title: The longest day
// •	Year: 1964

  // Creating the object using the object literal
  let myMovie = {
    'Title' : 'The longest day',
    'Year' : 1964
  }
  console.log('Question 1: myMovie properties and values are: ' + JSON.stringify(myMovie));

// Question 2:	Add in the properties:
// •	rating: 5
// •	Summary: World War II movie about the Normandy landings

  // Adding the properties to the object
  myMovie.rating = 5;
  myMovie.Summary = 'World War II movie about the Normandy landings';
  console.log('Question 2: myMovie properties and values are now: ' + JSON.stringify(myMovie));

// Question 3: Change the rating to 4 and change the year to 1962

  // Changing the properties
  myMovie.rating = 4;
  myMovie.Year = 1964;
  console.log('Question 3: myMovie properties and values are now: ' + JSON.stringify(myMovie));

// Question 4: Remove the Summary property

  // Deleting the property
  delete myMovie.Summary;
  console.log('Question 4: myMovie properties and values are now: ' + JSON.stringify(myMovie));
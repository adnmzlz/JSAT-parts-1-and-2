/**
 * File: part1-b.js
 * Version: 1.0.0
 * Author: Aidan Maizels
 * Date created: 10/10/2025
 * Date last modified: 10/10/2025
 * Description: This is a program which uses a range of algorithms to operate an array with given input.
 */


// Question 5: Create a JavaScript function called “sequentialSearch”, which:
// •	Accepts two parameters: an array and a value
// •	Searches the input array for the input value using sequential search
// •	Returns the index of the target value if found and or -1 if not found

// Defining the array
let array = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

// Defining the sorted array as a new variable using a function
let arraySorted = array.sort(function (a, b) {
  return a - b;
});

// Setting the value parameter we are searching for
let value = 25;

// Function to search for the value within the array
function sequentialSearch(arraySearch, target) {
  // Setting up the found variable, which will be set to -1
  let found = -1;

  console.log(
    `Question 5: Array to be searched is ${arraySearch}; and the value to be found is ${target}`
  );

  // Loop set up to cycle through the array in ascending order
  for (i = 0; i < arraySearch.length; i++) {
    // If during the cycle, the target value matches the current element, the found value will be changed to the index of the target value and stop.  If it does not, the found variable will remain at -1, indicating that the value does not exist in the array.
    if (arraySearch[i] == target) {
      found = i;
      break;
    }
    // Returns the found variable for use outside of the function's scope when it is called
  }
  return found;
}

// Calling the function
const result = sequentialSearch(arraySorted, value);

// Outputting results
if (result == -1) {
  console.log(`Question 5 result: The value of ${value} was not found`);
} else {
  console.log(
    `Question 5 result: The value of ${value} was found at the index ${result}`
  );
}

// Question 6: Create a JavaScript function called “binarySearch” that:
// •	Accepts two parameters: an array and a value
// •	Searches the input array for the input value using binary search
// •	Returns the index of the target array element if found or returns a -1 if not found

  // Setting search value
  let valueBinary = 5;

  // Function to search the array
  function binarySearch(searchArray, target) {
  // Found value set to -1 (not found)
  let found = -1;

  console.log(
    `Question 6: Array to be searched is ${searchArray}; and the value to be found is ${target}`
  );

  // Initialising the start and end points for each loop (defined by the index values)
  let start = 0;
  let end = searchArray.length - 1;

  // Setting a loop to continue to cycle through the array while the start does not meet the end
  while (start <= end) {
    // Finding the midpoint of the current start and end values
    let mid = Math.floor((start + end) / 2);

    // Loop to check the search value against the midpoint value.  If it does, loop ends.
    if (searchArray[mid] == target) {
      found = mid;
      break;
      // If the midpoint is lower than the search value, next search halves to look at the right side next time.
    } else if (searchArray[mid] < target) {
      start = mid + 1;
      // If the midpoint is higher than the search value, next search halves to look at the left side next time.
    } else {
      end = mid - 1;
    }
  }
  return found;
}

// Calling the function
const resultBinary = binarySearch(arraySorted, valueBinary);

// Outputting results
if (resultBinary == -1) {
  console.log(`Question 6 result: The value of ${valueBinary} was not found`);
} else {
  console.log(
    `Question 6 result: The value of ${valueBinary} was found at index ${resultBinary}`
  );
}

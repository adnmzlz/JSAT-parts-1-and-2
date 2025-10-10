/**
 * File: part1-a.js
 * Version: 1.1.0
 * Author: Aidan Maizels
 * Date created: 22/08/2025
 * Date last modified: 10/10/2025
 * Description: This is a program which uses a range of algorithms to operate an array with given input.
 */

// Question 1: Build the array

  // Defining the array
  let array = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
  console.log("Question 1: Array is " + array);

// Question 2: Sort the array in ascending order

  // Defining the sorted array as a new variable using a function
  let arraySorted = array.sort(function (a, b) {
    return a - b;
  });
  console.log("Question 2: Sorted array is " + arraySorted);

// Question 3: Insert three numbers (19, 23, 30) into the sorted array, keeping the new array in ascending order

  // Adding the numbers to the original array, unsorted
  array.push(19, 23, 30);
  console.log("Question 3: Array is now " + array);

  // Sorting the new array again
  arraySorted = array.sort(function (a, b) {
    return a - b;
  });
  console.log("Question 3: Sorted array is now " + arraySorted);

// Question 4: Remove two numbers 8, 31 from the array generated in step 3, and keep the new array sorted in ascending order

  // 8 and 31 are indexed as 2 and 11 in the array, respectively
  // Removing 8 from the array
  arraySorted.splice(2, 1);
  // Removing 31 from the array (now indexed at 10)
  arraySorted.splice(10, 1);
  console.log("Question 4: Sorted array is now " + arraySorted);
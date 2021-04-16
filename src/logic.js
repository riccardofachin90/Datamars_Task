/*****
 * Title: logic.js
 * Author: Riccardo Fachin
 * Description: Module containing all function implementations.
 *****/

/*****
 * Function to generate a random whole number greater than `min` and smaller than `max`.
 * NB: min and max are excluded
 *
 * @param1 {number} min - Mininum number
 * @param2 {number} max - Maximum number
 * @return {number} Random whole number
 *****/
export var getRandomNumber = function getRandomNumber(min, max) {
  // Parameters validation
  if (null === min || isNaN(min)) {
    return "Error! In 'getRandomNumber' method: the first parameter is not a number.";
  }
  if (null === max || isNaN(max)) {
    return "Error! In 'getRandomNumber' method: the second parameter is not a number.";
  }
  if (min === max) {
    return "Attention! In 'getRandomNumber' method: min and max are the same number.";
  }
  if (max - min <= 1) {
    return "Attention! In 'getRandomNumber' method: there are no whole numbers between min and max.";
  }

  // Method body: Math.floor() and Math.random() are used to calculate the random
  // whole number based on the range provided
  return Math.floor(Math.random() * (max - min - 1) + (min + 1));
};

/*****
 * Function to concatenate two strings.
 * NB: a and b must be provided and cannot be empty
 *
 * @param1 {string} a - First string
 * @param2 {string} b - Second string
 * @return {string} String concatenation
 *****/
export var putTogether = function putTogether(a, b) {
  // Parameters validation
  if (typeof a !== "string") {
    return "Error! In 'putTogether' method: the first parameter is not a string.";
  }
  if (typeof b !== "string") {
    return "Error! In 'putTogether' method: the second parameter is not a string.";
  }
  if (a.length === 0) {
    return "Attention! In 'putTogether' method: the first string is empty";
  }
  if (b.length === 0) {
    return "Attention! In 'putTogether' method: the second string is empty";
  }

  // Method body: the '+' operator is used to concatenate strings
  return a + b;
};

/*****
 * Function to create an array of object keys sorted by name.
 *
 * @param {object} object - Object containing keys
 * @return {array} Array of object keys
 *****/
export var transformObjectToArray = function transformObjectToArray(object) {
  // Parameters validation
  if (typeof object !== "object") {
    return "Error! In 'transformObjectToArray' method: the parameter is not an object.";
  }
  if (null === object) {
    return "Error! In 'transformObjectToArray' method: the object is null.";
  }

  // Method body: I use a for cycle to select all the object's keys, put them
  // in an array and use the sort() method to order them alphabetically
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }

  return keys.sort();
};

/*****
 * Function Return a new array sorted by "updatedAt” key of type Date
 * NB: the function does not mutate the original array
 *
 * @param {array of objects} arrayOfObjects - Array of objects
 * @return {array of objects} Array of objects
 *****/
export var ultimateSort = function ultimateSort(arrayOfObjects) {
  // Parameters validation
  if (typeof arrayOfObjects !== "object") {
    return "Error! In 'ultimateSort' method: the parameter is not an object.";
  }
  if (null === arrayOfObjects) {
    return "Error! In 'ultimateSort' method: the object is null.";
  }

  // Method body: I copy the given array with Object.create() in order to avoid mutating
  // the original array. Then I compare each pair of members of the array and depending
  // on their values I sort the new array
  var sortedArray = Object.create(arrayOfObjects);

  sortedArray.sort(function (previousElement, followingElement) {
    if (
      previousElement.updatedAt === undefined ||
      !(previousElement.updatedAt instanceof Date)
    ) {
      return 1;
    }
    if (
      followingElement.updatedAt === undefined ||
      !(followingElement.updatedAt instanceof Date)
    ) {
      return -1;
    }

    var dateA = previousElement.updatedAt;
    var dateB = followingElement.updatedAt;

    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  });

  return sortedArray;
};

// Definition of exports for main.js
module.exports = {
  getRandomNumber: getRandomNumber,
  putTogether: putTogether,
  transformObjectToArray: transformObjectToArray,
  ultimateSort: ultimateSort
};

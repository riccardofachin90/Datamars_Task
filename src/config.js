/*****
 * Title: logic.js
 * Author: Riccardo Fachin
 * Description: Module containing all parameters required by main.js.
 *****/

// Parameters for getRandomNumber()
var firstFunction = { firstParam: 2, secondParam: 7 };

// Parameters for putTogether()
var secondFunction = { firstParam: "Data", secondParam: "mars" };

// Parameters for transformObjectToArray()
var thirdFunction = {
  object: { id: "10", name: "Ten", type: "number", previous: 9, next: 11 }
};

// Parameters for ultimateSort()
var fourthFunction = {
  arrayOfObjects: [
    { id: "1", updatedAt: new Date("2021-01-01T00:00:00Z") },
    { id: "2" },
    { id: "3", updatedAt: new Date("2021-01-02T12:00:00Z") },
    { id: "4", updatedAt: "2020-12-25T10:00:00Z" },
    { id: "5", updatedAt: new Date("2020-12-25T10:00:00Z") }
  ]
};

// Definition of exports for main.js
exports.firstFunction = firstFunction;
exports.secondFunction = secondFunction;
exports.thirdFunction = thirdFunction;
exports.fourthFunction = fourthFunction;

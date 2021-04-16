/*****
 * Title: main.js
 * Author: Riccardo Fachin
 * Description: Main module: it calls all functions from logic.js and console log the results.
 * NB: the parameters are provided by loading config.js module
 *****/

// Definition of imports from logic.js and config.js
import * as logic from "./logic.js";
var config = require("./config.js");

// Console log of all the functions
console.log(
  logic.getRandomNumber(
    config.firstFunction.firstParam,
    config.firstFunction.secondParam
  )
);

console.log(
  logic.putTogether(
    config.secondFunction.firstParam,
    config.secondFunction.secondParam
  )
);

console.log(logic.transformObjectToArray(config.thirdFunction.object));

console.log(logic.ultimateSort(config.fourthFunction.arrayOfObjects));

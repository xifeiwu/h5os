// import colorPoint from 'class1';
var colorPoint = require('./class1').colorPoint;

console.log(colorPoint.toString());
console.log(colorPoint.hasOwnProperty('x')) // true
console.log(colorPoint.hasOwnProperty('y')) // true
console.log(colorPoint.hasOwnProperty('toString')) // false
console.log(colorPoint.__proto__.hasOwnProperty('toString')) // true
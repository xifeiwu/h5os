var str = 'hello';
var str1 = String('hello');
var str2 = new String('hello');
console.log(typeof str); // string
console.log(typeof str1); // string
console.log(typeof str2); //object

var str3 = 'world';
var str4 = '!';
str.concat(str3);
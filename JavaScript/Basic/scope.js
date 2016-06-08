block scope

// 内层变量可能会覆盖外层变量
var tmp = new Date();
function f() {
  console.log(tmp);
  if (false) {
    var tmp = "hello world";
  }
}
f(); // undefined

// the use of closure and IIFE
var funcs = []; 
for (var i = 0; i < 10; i++) {
  console.log(i);
  var func = (function(ori) {
    var value = ori;
    return function() {
      return value;
    }
  })(i);
  funcs.push(func);
}
for (var j = 0; j < 10; j++) {
  console.log(funcs[j]());
}

// the use of let.
var values = [];
for (let i = 0; i < 10; i++) {
  values.push(i);
}
for (var j = 0; j < 10; j++) {
  console.log(values[j]);
}
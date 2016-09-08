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

// 变量提升
// 就是把定义在后面的变量或函数提升到前面中定义
// 变量提升 只是提升变量的声明，并不会把赋值也提升上来
var v='Hello World'; 
(function(){ 
  alert(v); 
  var v='I love you'; 
})()
var v='Hello World'; 
(function(){ 
  alert(v); 
})() 

// 函数提升
// 一种是函数表达式，另外一种是函数声明方式。我们需要重点注意的是，只有函数声明形式才能被提升
function myTest(){ 
  foo(); 
  function foo(){ 
    alert("我来自 foo"); 
  }
} 
myTest();
// demo2
ff(66);
function ff() {
  console.log(arguments[0]);
} // output: 66

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
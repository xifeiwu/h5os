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

//
var funcs = []; 
for (var i = 0; i < 10; i++) {
	console.log(i);
	function getValue() {
		var value = i;
		return value;
	}
	funcs.push(() => {
		console.log(getValue());
	});
}
for (var j = 0; j < 10; j++) {
	funcs[j]();
}


var a = [];
for (var i = 0; i < 10; i++) {
  	a[i] = function (i) {
		function getValue(i) {
			var value = i;
			return value;
		}
    	console.log(getValue());
  	};
}
a[6]();
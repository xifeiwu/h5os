function alert() {
  // console.log(arguments);
  console.log('The length of arguments: ' + arguments.length);
  var length = arguments.length;
  var i=0;
  for (; i < length; i++) {
    console.log(arguments[i]);
  }
}
function a(xx, yy) {    
    alert(xx, yy);  
    alert(arguments);
}
a.apply(null, [5, 55]);
a.call(null, [5, 55]);
console.log('=============================');
a.apply(null, 100);
a.call(null, 100);

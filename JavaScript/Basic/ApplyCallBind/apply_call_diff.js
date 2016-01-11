function alert() {
  console.log(arguments);
}
function a(xx, yy) {    
    alert(xx, yy);    
    alert(this);    
    alert(arguments);
}
a.apply(null, [5, 55]);
a.call(null, [5, 55]);

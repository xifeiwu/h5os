// demo for call and apply.
function Me(x, y, z) {
  console.log('x: ' + x);
  console.log('y: ' + y);
  console.log('z: ' + z);
}
Me.call(null, [1, 2, 3]);
Me.apply(null, [1, 2, 3]);

// demo for call
var target = [1, 2, 3];
function Plugin(option) {
  return this.forEach(function(value) {
    console.log(option);
    console.log(value);
  })
}
Plugin.call(target, 'show');

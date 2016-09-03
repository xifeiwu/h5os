// demo for call and apply.
function Me() {
  console.log(arguments);
}
Me.call(this, [1, 2, 3]);
Me.apply(this, [1, 2, 3]);

// demo for call
var target = [1, 2, 3];
function Plugin(option) {
  return this.forEach(function(value) {
    console.log(option);
    console.log(value);
  })
}
Plugin.call(target, 'show');

var success = function() {
  console.log('success function');
}
var bk = success;
success = function() {
  console.log('another success function.');
}
bk();
success();

var odd = [];
var even = [];
var bucket;
for(var i = 0; i < 10; i++) {
  bucket = i % 2 === 0 ? even : odd;
  bucket.push(i);
}
console.log(odd);
console.log(even);
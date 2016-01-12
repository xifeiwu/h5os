obj = new Object();
if (obj && obj.prop) {
  cosole.log('obj.prop');
} else {
  console.log('obj.prop no exist.');
}

obj2 = {};
obj2['name'] = 'This is the name of obj2';
console.log(obj2['name']);
console.log(obj2['age']);

function testError(err) {
  if (!err) {
    console.log('callback success.');
  } else {
    console.log('callback fail.');
  }
}
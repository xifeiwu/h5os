function getObj() {
  var obj = {
    username: 'lili',
    password: '123456'
  }
  return obj;
}

var obj = getObj();
console.log('obj: ' + JSON.stringify(obj));

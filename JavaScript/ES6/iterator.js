class RangeIterator {
  constructor(start, stop) {
    this.value = start;
    this.stop = stop;
  }

  [Symbol.iterator]() { return this; }

  next() {
    var value = this.value;
    if (value < this.stop) {
      this.value++;
      return {done: false, value: value};
    } else {
      return {done: true, value: undefined};
    }
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop);
}

for (var value of range(0, 3)) {
  console.log(value);
}



// The second demo
function* F() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}
var obj = {};
var f = F.call(obj);

f.next();  // Object {value: 2, done: false}
f.next();  // Object {value: 3, done: false}
f.next();  // Object {value: undefined, done: true}

obj.a // 1
obj.b // 2
obj.c // 3


// The third demo
function* idMaker(){
  var index = 0;
  while(index<3) {
    var value = yield index++;
    console.log('value: ' + value);
  }
}
var gen = idMaker();
console.log(gen.next().value); // 0
console.log(gen.next(2).value); // 1
console.log(gen.next().value); // 2

// The fourth demo
function* getPath() {
  console.log('begin.');
  var fstat = yield stat('path');
  console.log(fstat);
};
function stat(file) {
  return function (done) {
    console.log(file + 'done');
  };
}
var getp = getPath();
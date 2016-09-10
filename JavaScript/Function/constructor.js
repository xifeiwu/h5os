/**
 * The use of constructor function
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}
/**
 * prototype object
 */
Person.prototype = {
  job: 'student',
  getJob: function() {
    console.log(this.job);
  },
  setJob: function(job) {
    this.job = job;
  },
  getName: function() {
    console.log(this.name);
  }
}
/**
 * The use of new
 * 1. create a Object.
 * 2. refer this of function to the new object.
 * 3. run the function.
 * 4. return the new created object.
 */
var person = new Person('Greg', 20);
var obj = {};
Person.apply(obj, ['Greg', 20]);
obj.__proto__ = Person.prototype;

var person1 = new Person('Greg1', 20);
person1.job = 'teacher';
var person2 = new Person('Greg2', 20);

/**
 * the use of for-in and Object.keys()
 */
Object.keys(person1);
for (let key in person1) {
  console.log(key + ': ' + person1[key]);
}

/**
 * the function of prototype can be modified by instance
 */
Object.getOwnPropertyDescriptor(person1, 'getJob');
// Object {value: null, writable: true, enumerable: true, configurable: true}

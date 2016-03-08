'use strict';

var MyClass = function(name) {
  if (name) {
    this.name = name;
  } else {
    this.name = 'default';
  }
};

MyClass.prototype = {
  getValue: function() {
    return {
      name: this.name,
      age: 20
    };
  },
};

var myObj = new MyClass('ok');
console.log(myObj.getValue());
(function(exports) {

  //Shape - superclass
  function Shape() {
    this.x = 0;
    this.y = 0;
  }

  Shape.prototype.move = function(x, y) {
      this.x += x;
      this.y += y;
      console.info("Shape moved.");
  };

  // Rectangle - subclass
  function Rectangle() {
    Shape.call(this); //call super constructor.
  }

  Rectangle.prototype = Object.create(Shape.prototype, {
    // foo会成为所创建对象的数据属性
    foo: { writable:true, configurable:true, value: "hello" },
    // bar会成为所创建对象的访问器属性
    bar: {
      configurable: false,
      get: function() { return 10 },
      set: function(value) { console.log("Setting `o.bar` to", value) }
    }
  });

  var rect = new Rectangle();

  rect instanceof Rectangle //true.
  rect instanceof Shape //true.

  rect.move(1, 1); //Outputs, "Shape moved."
  window.rect = rect;
})(window);
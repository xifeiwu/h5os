var x = 3;
function f1(m){
  return m * 2;     
}
f1(x + 5);

// 等同于
var thunk = function () {
  return x + 5;
};
function f2(thunk){
  return thunk() * 2;
}
f2(thunk);


// Demo for thunkify
function thunkify(fn){
  return function(){
    var args = new Array(arguments.length);
    var ctx = this;

    for(var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }

    return function(done){
      var called;

      args.push(function(){
        if (called) return;
        called = true;
        done.apply(null, arguments);
      });

      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    }
  }
};
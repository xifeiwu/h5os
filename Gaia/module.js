var value = typeof define == 'function' && define.amd ? define: (function(n, w) {
  'use strict';
  return typeof module == 'object' ?
  function(c) {
    c(require, exports, module);
  }: function(c, d) {
    c = (typeof c == 'function') ? c: d;
    var m = {
      exports: {}
    };
    c(function(n) {
      return w[n];
    },
    m.exports, m);
    w[n] = m.exports;
  };
})('NavigationManager', this);


var value = (function(n, w) {
  'use strict';
  return function(c, d) {
    c = (typeof c == 'function') ? c: d;
    var m = {
      exports: {}
    };
    c(function(n) {
      return w[n];
    },
    m.exports, m);
    w[n] = m.exports;
  };
})('NavigationManager', this)


/* global evt, define */
(function(define){'use strict';define(function(require,exports,module){

exports.SpatialNavigator = SpatialNavigator;

});})(typeof define=='function'&&define.amd?define
:(function(n,w){'use strict';return typeof module=='object'?function(c){
c(require,exports,module);}:function(c,d){c=(typeof c == 'function')?c:d;
var m={exports:{}};c(function(n){return w[n];},m.exports,m);w[n]=m.exports;};})
('SpatialNavigator',this));


(function(define) {
  'use strict';
  define(function(require, exports, module) {

    exports.SpatialNavigator = SpatialNavigator;

  });
})(typeof define == 'function' && define.amd ? define: (function(n, w) {
  'use strict';
  return typeof module == 'object' ?
  function(c) {
    c(require, exports, module);
  }: function(c, d) {
    c = (typeof c == 'function') ? c: d;
    var m = {
      exports: {}
    };
    c(function(n) {
      return w[n];
    },
    m.exports, m);
    w[n] = m.exports;
  };
})('SpatialNavigator', this));


(function(define) {
  'use strict';
  define(function(require, exports, module) {

    exports.SpatialNavigator = SpatialNavigator;

  });
})((function(n, w) {
  'use strict';
  return function(c, d) {
    c = (typeof c == 'function') ? c: d;
    var m = {
      exports: {}
    };
    c(function(n) {
      return w[n];
    },
    m.exports, m);
    w[n] = m.exports;
  };
})('SpatialNavigator', this));
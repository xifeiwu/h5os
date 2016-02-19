# About focus and blur
Try to focus on an element in its blur listener function always end with fail.
If focus is called in nextTick funciton, it works well.
function nextTick(callback) {
  Promise.resolve().then(callback);
}
below are comments copied from h5-input-wrapper. refocus should after blur.
// We need to do setTimeout because both finishTextEdit and finishSelect
// moves focus to the input wrapper and which causes the "focus" event
// occurs before the original "blur" event from the perspective of soft key
// helper and clears all of the soft keys.

# Something need to notice when js coding
the flow of event propagation.
refocus should after blur all-complete.
some asynchronous function may cause incorrect work sequence.
transaction of indexedDB should execute one after another.

# day_observer.findAssociated

# The function definition in js module
# the first way of defining getUrlById is wrong.
define(function(require, exports) {
'use strict';
  exports.myfunc = function(param) {
    getUrlById(param.id);
  }
  getUrlById = function(id) {
    return '/alarm-display/' + id;
  };
  function getUrlById(id) {
    return '/alarm-display/' + id;
  }
});

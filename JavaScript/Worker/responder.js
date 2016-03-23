postMessage('responder has started...');

// Setup an event listener that will handle messages sent to the worker.
self.addEventListener('message', function(e) {
  // Send the message back.
  var data = e.data;
  self.postMessage('You said: ' + data);
}, false);

var myWorker = new Worker("responder.js");

myWorker.onmessage = function (oEvent) {
  console.log("Worker said : " + oEvent.data);
};

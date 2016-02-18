// This demo is used to get all the alarms
var alarms = window.navigator.mozAlarms;

var request = alarms.getAll();
request.onsuccess = function(e) {
  var msg = 'get alarms success';
  console.log('CALENDAR:', msg);
  var data = e.target.result;
  var length = data.length;
  var mozAlarm;
  if (length == 0) {
    console.log('There is no alarm.');
  }

  for (var i = 0; i < length; i++) {
    mozAlarm = data[i].data;
    console.log(mozAlarm);
    if (
      mozAlarm &&
      'eventId' in mozAlarm &&
      'trigger' in mozAlarm
    ) {
    }
  }
};

request.onerror = function() {
  var msg = 'failed to get alarms';
  console.error('CALENDAR:', msg);
};
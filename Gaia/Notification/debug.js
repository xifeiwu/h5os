var alarms = navigator.mozAlarms;
/**
 * Why are we getting all alarms here?
 *
 * The alarms are designed to keep the total number
 * of entires (in mozAlarms) down but we should keep at
 * minimum one active at all times. For example if the user
 * has sync turned off and wants notifications we need
 * to have an alarm go off to trigger adding more alarms.
 */
var req = alarms.getAll();
//XXX: even with the good reasons above we need
//     to justify the perf cost here later.
req.onsuccess = function(e) {
  var data = e.target.result;
  var len = data.length;
  var mozAlarm;
  var msg = 'get alarms success, length: ' + data.length;
  console.log('CALENDAR:', msg);

  requiresAlarm = true;

  for (var i = 0; i < len; i++) {
    mozAlarm = data[i].data;
    console.log(mozAlarm);
    if (
      mozAlarm &&
      'eventId' in mozAlarm &&
      'trigger' in mozAlarm
    ) {
      requiresAlarm = false;
      break;
    }
  }
};

req.onerror = function() {
  var msg = 'failed to get alarms';
  console.error('CALENDAR:', msg);
};




var alarm = {
  date: new Date("March 3, 1970 20:45:00"),
  respectTimezone: 'ignoreTimezone',
  data: {
    message: "Do something dude!"
  }
};

var request = navigator.mozAlarms.add(alarm.date, alarm.respectTimezone, alarm.data);

request.onsuccess = function () {
  console.log('A new alarm has been set:' + this.result);
  alarm.id = this.result; // get the id of the new alarm.
}

request.onerror = function () {
  console.log('operation failed: ' + this.error);
}
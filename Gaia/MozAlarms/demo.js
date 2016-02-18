/**
 * when the alarm is triggered, it is removed from alarm queue.
 * The MozAlarmsManager is used to trigger an alarm as specific time.
 */


// new Date("Jan 3, 1970 20:47:00")
// Add a new alarm to mozAlarms.
var alarm = {
  date: new Date(new Date().getTime() + 5 * 1000),
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
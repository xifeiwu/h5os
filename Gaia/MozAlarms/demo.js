/**
 * when the alarm is triggered, it is removed from alarm queue.
 * The MozAlarmsManager is used to trigger an alarm as specific time.
 */

// add listener for mozMessage.
navigator.mozSetMessageHandler('alarm', message => {
  console.log('Received alarm message: ' + JSON.stringify(message));
  var data = message.data;
});

// new Date("Jan 3, 1970 20:47:00")
// Add a new alarm five seconds later to mozAlarms.
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


// Show All The Alarms
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
  } else {
    console.log('There are ' + length + ' alarms.');
    var showDetail = false;
    if (showDetail) {
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
    }
  
  }
};
request.onerror = function() {
  var msg = 'failed to get alarms';
  console.error('CALENDAR:', msg);
};

// Remove All Alarms
var request = navigator.mozAlarms.getAll();
request.onsuccess = function () {
  this.result.forEach(function (alarm) {
    navigator.mozAlarms.remove(alarm.id);
  });
  console.log('remove all alarm success.');
}
request.onerror = function () {
  console.log('operation failed: ' + this.error);
}

/**
 * demo for remove alarm by id.
 */
_removeDependents: function(alarmId, trans) {
  trans.addEventListener('complete', () => {
    var request = navigator.mozAlarms.getAll();
    request.onsuccess = function (e) {
      e.target.result.some((alarm) => {
        if (alarm.data._id === alarmId) {
          navigator.mozAlarms.remove(alarm.id);
          return true;
        }
        return false;
      });
    }
    request.onerror = function () {
      debug('remove alarm error.');
    }
  });
},

# unrelated code about notification.
As alarm is always work with notification, which is used to notice user that alarm is triggered.
Notice: Notification is a W3C standard.
> The core code.
  var notification = new Notification('Notification Title', {
    icon: '',
    body: "Hey there! You've been notified!",
  });
  notification.onclick = function () {
    console.log("http://stackoverflow.com/a/13328397/1269037");
  };

> The full code
  document.addEventListener('DOMContentLoaded', function () {
    if (Notification.permission !== "granted")
      Notification.requestPermission();
  });

  function notifyMe() {
    console.log('in function notifyMe.');
    if (!Notification) {
      alert('Desktop notifications not available in your browser. Try Chromium.'); 
      return;
    }
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    } else {
      var notification = new Notification('Notification Title', {
        icon: '',
        body: "Hey there! You've been notified!",
      });
      notification.onclick = function () {
        console.log("http://stackoverflow.com/a/13328397/1269037");
      };
    }
  }
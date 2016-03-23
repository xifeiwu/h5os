obj = new Object();
if (obj && obj.prop) {
  cosole.log('obj.prop');
} else {
  console.log('obj.prop no exist.');
}

obj2 = {};
obj2['name'] = 'This is the name of obj2';
console.log(obj2['name']);
console.log(obj2['age']);

function testError(err) {
  if (!err) {
    console.log('callback success.');
  } else {
    console.log('callback fail.');
  }
}

busytime = {
  "start": {
    "tzid": "UTC",
    "offset": 0,
    "utc": 1450699200000
  },
  "end": {
    "tzid": "UTC",
    "offset": 0,
    "utc": 1450702800000
  },
  "recurrenceId": {
    "tzid": "UTC",
    "offset": 0,
    "utc": 1450699200000
  },
  "eventId": "1-84acdb6f-bb29-4892-ac06-520ab7394bf9",
  "isException": false,
  "_id": "1-84acdb6f-bb29-4892-ac06-520ab7394bf9-82557bc5-1337-4bd5-a62b-a00128558052",
  "calendarId": 1,
  "startDate": "2015-12-21T12:00:00.000Z",
  "endDate": "2015-12-21T13:00:00.000Z"
}
var {_id, startDate, endDate, eventId} = busytime;


var result = {
  tzid: 'china',
  // from seconds to ms
  offset: 1000,
  // from seconds to ms
  utc: '431431'
};
result.isDate = true;
console.log(result);
// { tzid: "china", offset: 1000, utc: "431431", isDate: true }

// demo for Error
function cb(err, data) {
  if (err) {
    console.log(err)
  }
}
function getData(cb) {
  cb(new Error('not found'));
}
getData(cb);

// The use of Map.
var days = new Map();
days.set('first', 'Monday');
days.set('second', 'Tuesday');
days.set('three', 'Wendesday');
for (var key of days.keys()) {
  console.log(days.get(key))
}

// demo to get an Obj.
function Timespan(startDate, endDate) {
  this.start = startDate.valueOf();
  this.end = endDate.valueOf();
}
Timespan.fromJSON = function(obj) {
  return new Timespan(obj.start, obj.end);
}
Timespan.prototype = {
  toJSON: function() {
    return {
      start: this.start,
      end: this.end
    };
  },
};

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
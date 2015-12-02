NO_NETWORK=1 make install-gaia APP=calendar

week.setAttribute('aria-selected', 'true');

navigation_map, navSetup
var containerId = 'month-view';
var query='.month.active .focusable';
var container = (containerId === undefined) ? document.body :
                document.getElementById(containerId);
var elements = container.querySelectorAll(query);

// Load of each view.
function snakeCase(name) {
  return name
    .replace(/^./, chr => chr.toLowerCase())
    .replace(/[A-Z]/g, chr => '_' + chr.toLowerCase());
};
name = 'Month';
var snake = snakeCase(name);
console.log('Will try to load view: '+ snake);
window.require([ 'views/' + snake ], (aView) => {
  console.log('Loaded view:' + aView);
  window.aView = aView;
  // Views[name] = aView;
  // return this.view(name, cb);
});

window.require([], (module) => {
  window.loadmodule = module;
});
window.require(['h5-option-menu'], (module) => {
  window.loadmodule = module;
});

// soft key related.
meta = document.head.querySelector('meta[name="soft-keys"]');
meta.content = 'lsk=Add event, dpe=View, rsk=Options';

// option menu related
document.querySelector('h5-option-menu');


// 'readOnly' setter called on an object that does not implement interface HTMLInputElement.

var rootF = document.querySelector('#modify-event-view');
['title', 'location', 'allday', 'startDate', 'startTime', 'endDate', 'endTime', 'repeat',
'calendarId', 'alarm[]', 'description'].forEach(function(key) {
  var selector = '[name="' + key + '"]';
  switch(key) {
    case 'allday':
      console.log(key + ' -> ' + rootF.querySelector(selector).checked);
      break;
    case 'description':
      console.log(key + ' -> ' + rootF.querySelector(selector).innerHTML);
      break;
    default:
      console.log(key + ' -> ' + rootF.querySelector(selector).value);
      break;
  }  
})

['title', 'location', 'startDate', 'startTime', 'endDate', 'endTime', 'repeat',
'calendarId', 'alarm[]', 'description'].forEach(function(key) {
  var selector = '[name="' + key + '"]';
  rootF.querySelector(selector).readOnly = false;
});
// Notice: allday and alarm[] do not have readOnly property.

// rootF.querySelector('[name="title"]').value
// rootF.querySelector('[name="location"]').value
// rootF.querySelector('[name="calendarId"]').value
// rootF.querySelector('[name="description"]').childNodes[0].nodeValue
// rootF.querySelector('[name="startDate"]').value
// rootF.querySelector('[name="startTime"]').value
// rootF.querySelector('[name="endDate"]').value
// rootF.querySelector('[name="endTime"]').value
// rootF.querySelector('[name="allday"]').checked
// rootF.querySelector('[name="repeat"]').value
// rootF.querySelector('[name="description"]').innerHTML


fields: {
  "title": ".4555",
  "location": "ila",
  "repeat": "never",
  "calendarId": "local-first",
  "description": "dd",
  "startDate": "2015-10-27T12:00:00.000Z",
  "endDate": "2015-10-27T13:00:00.000Z",
  "alarms": [{
      "action": "DISPLAY",
      "trigger": -300
  }]
}

const DB_NAME = 'b2g-calendar';
const DB_VERSION = 15;
const STORE = Object.freeze({
  events: 'events',
  accounts: 'accounts',
  calendars: 'calendars',
  busytimes: 'busytimes',
  settings: 'settings',
  alarms: 'alarms',
  icalComponents: 'icalComponents'
});

var connection;
function getConnection() {
  var req = indexedDB.open(DB_NAME, DB_VERSION);
  req.onsuccess = function(evt) {
    console.log('request success.');
    connection = this.result;
  }
  req.onerror = function (evt) {
    console.error("request error:", JSON.stringify(evt));
  };
}

function showDataBase(name) {
  var transaction = connection.transaction(name, 'readonly');
  var store = transaction.objectStore(name);
  var req = store.count();
  req.success = function(evt) {
    console.log('There are ' + evt.target.result + ' elements in store ' + name);
  };
  req.onerror = function() {
    console.log('request store count error');
  };
  req = store.openCursor();
  req.onsuccess = function(evt) {
    var cursor = evt.target.result;
    if (cursor) {
      console.debug("cursor.value:", cursor.value);
      cursor.continue();
    }
  }
  req.error = function(evt) {
    console.log('request cursor error.');
  }
}

function removeDataById(name, id) {
  var transaction = connection.transaction(name, 'readwrite');
  var store = transaction.objectStore(name);
  var req = null;
  if (id.length) {
    req = store.delete(id);
    req.onsuccess = function(evt) {
      console.debug("evt.target:", evt.target);
      console.debug("evt.target.result:", evt.target.result);
      console.debug("delete successful");
    };
    req.onerror = function (evt) {
      console.error("removeData:", evt.target.errorCode);
    };    
  }
}

getConnection();
showDataBase(STORE.events);
showDataBase(STORE.busytimes);
showDataBase(STORE.alarms);
showDataBase(STORE.settings);
showDataBase(STORE.calendars);



    ids.forEach(function(id) {
      var trans = this.db.transaction('events');
      var store = trans.objectStore('events');
      var req = store.get(id);

      req.onsuccess = success;
      req.onerror = error;
    }, this);


var date = new Date(evt.target.value + 'T08:00:00');
    // var selectedDate = new Date(evt.target.value);
    // console.log('selectedDate: ' + selectedDate);
    // console.log('selectedDate.getTime(): ' + selectedDate.getTime());
    // var newDate = new Date(selectedDate.getTime() + 1000);
    // console.log('newDate: ' + newDate);
    // console.log('newDate: ' + newDate.getTime());
    // var date = new Date(new Date(evt.target.value).getTime() + 1);

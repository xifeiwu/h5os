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


git diff event-dev local-CORE-2178 ./js/views/modify_event.js

NO_NETWORK=1 make install-gaia APP=calendar

acacaltest@gmail.com
whyhaoshuai

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

# another way to show showDataBase
window.app.db.getStore('Calendar')._cached

var store = this.app.store('Account');
fetch = store.all().then((accounts) => {
  console.log(accounts);
  for(var key in accounts) {
    console.log(key + '->' + accounts[key]);
  }
});

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

# add new section
var section = document.createElement('section');
section.id = 'test-section';
section.classList.add('fullscreen-view');
section.classList.add('theme-calendar');
document.body.appendChild(section);
section.innerHTML = `
<div>
<p tabindex="0">ItemA</p>
<p tabindex="0">ItemB</p>
<p tabindex="0">ItemC</p>
</div>
`


# startDate of Modify Event.
var modify = document.querySelector('#modify-event-view');
var startDate = modify.querySelector('[name="startDate"]');
var softKeys = {
  lsk: 'back', dpe: 'select', rsk: 'save'
};
var softKey = {};
var lsk = {};
lsk.name = 'back';
softKey.lsk = lsk;
['sk-modify-event-start-date', 'sk-modify-event-start-time', 'sk-modify-event-end-date', 'sk-modify-event-end-time'].forEach(
function(name) {
  var element = modify.querySelector('.' + name);
  console.log(element);
  SoftkeyHandler.register(element, softKeys);
});

debug('fields: ' + JSON.stringify(fields));


# emulate keydown
var evt = new CustomEvent(
  "keydown",
  {
    detail:
    {
      message: "Hello There",
      time: new Date(),
      key: 'AcaSoftDown'
    },
    bubbles: true,
    cancelable: true
});
evt.key = 'AcaSoftDown'
window.dispatchEvent(evt);


# l10n-data-id
account-calendar-format={{account}}-{{calendar}}
_('account-calendar-format', {
  account: _('preset-' + account.preset),
  calendar: calendar.remote.name
});

# for readout
var title = document.querySelector('#event-detail-title');
title.innerHTML = 'Chinese spring day is pre<span>tty good. Do you wa</span>nt to have a trip to china and see the scene. It must have a lot fun and have a goog memory here. and We are here watting for your arriving, please contact with me when you are here.';

var title = document.querySelector('#modify-event-view input[name="title"]');
title.value = 'Chinese spring day is pretty good. Do you want to have a trip to china and see the scene. It must have a lot fun and have a goog memory here. We are here watting for your arriving, please contact with me when you are here.';


#for dialog refocus

forDebug.app.dialogController.show({
  message: 'message',
  dialogType: 'confirm',
  softKeysHandler: {
    rsk: {
      name: 'ok',
      action: () => {
        forDebug.app.dialogController.close();
        document.querySelector('#modify-event-view').focus();
        return false;
      }
    },
    lsk: {
      action: () => {
        return false;
      }
    },
    dpe: {}
  }
});
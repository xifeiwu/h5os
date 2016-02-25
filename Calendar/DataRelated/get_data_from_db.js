'use strict';

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
  var req = window.indexedDB.open(DB_NAME, DB_VERSION);
  req.onsuccess = function(evt) {
    console.log('request success.');
    connection = this.result;
  };
  req.onerror = function (evt) {
    console.error('request error:', JSON.stringify(evt));
  };
}

function showDataBase(name) {
  var transaction = connection.transaction(name, 'readonly');
  transaction.oncomplete = function commitComplete() {
    console.log('the transaction is complete.');
  };

  transaction.onerror = function commitError(e) {
    console.log('the transaction is error.');
  };
  var store = transaction.objectStore(name);
  var req = store.count();
  req.onsuccess = function(evt) {
    console.log('There are ' + evt.target.result +
      ' elements in store ' + name);
  };
  req.onerror = function() {
    console.log('request store count error');
  };
  var viewData = store.openCursor();
  viewData.onsuccess = function(evt) {
    var cursor = evt.target.result;
    if (cursor) {
      console.debug('cursor.value:', JSON.stringify(cursor.value));
      cursor.continue();
    }
  };
  viewData.onerror = function(evt) {
    console.log('request cursor error.');
  };
}

function removeDataById(name, id) {
  var transaction = connection.transaction(name, 'readwrite');
  var store = transaction.objectStore(name);
  var req = null;
  if (id.length) {
    req = store.delete(id);
    req.onsuccess = function(evt) {
      console.debug('evt.target:', evt.target);
      console.debug('evt.target.result:', evt.target.result);
      console.debug('delete successful');
    };
    req.onerror = function (evt) {
      console.error('removeData:', evt.target.errorCode);
    };    
  }
}

function clearDataBase(name) {
  var transaction = connection.transaction(name, 'readwrite');
  var store = transaction.objectStore(name);
  var reqDelete;
  var reqCursor = store.openCursor();
  reqCursor.onsuccess = function(evt) {
    var cursor = evt.target.result;
    if (cursor) {
      // console.debug('cursor.value:', JSON.stringify(cursor.value));
      var id = cursor.value._id;
      reqDelete = store.delete(id);
      reqDelete.onsuccess = function(evt) {
        console.debug('delete success: ' + id);
      };
      reqDelete.onerror = function(evt) {
        console.debug('delete error: ' + id);
      };
      cursor.continue();
    }
  };
  reqCursor.onerror = function(evt) {
    console.log('request cursor error.');
  };
}

function getSelectedData(name, indexName, indexValue) {
  var transaction = connection.transaction(name, 'readwrite');
  var indexedStore = transaction.objectStore(name).index(indexName);
  var req = indexedStore.openCursor(window.IDBKeyRange.only(indexValue));
  req.onsuccess = function(event) {
    var cursor = event.target.result;
    if (cursor) {
      console.debug('cursor.value:', JSON.stringify(cursor.value));
      cursor.continue();
    }
  };
  req.onerror = function(evt) {
    console.log('getSelectedData request cursor error.');
  };

  // var req = indexedStore.mozGetAll(IDBKeyRange.only(indexValue));
  // req.onsuccess = function(e) {
  //   console.log(e.target.result);
  // };
}

function deleteAllDataBase() {
  var req = window.indexedDB.deleteDatabase(DB_NAME);

  req.onblocked = function() {
    console.log('deleteDatabase blocked');
  };

  req.onsuccess = function(event) {
    console.log('deleteDatabase success');
  };

  req.onerror = function(event) {
    console.log('deleteDatabase error');
  };
}
getConnection();

// deleteAllDataBase()
// showDataBase(STORE.events);
// showDataBase(STORE.busytimes);
// showDataBase(STORE.alarms);
// showDataBase(STORE.settings);
// showDataBase(STORE.calendars);
// showDataBase(STORE.accounts);
// showDataBase(STORE.icalComponents);

// getSelectedData(STORE.events, 'calendarId', 1);

// clearDataBase(STORE.calendars);
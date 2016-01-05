remote = {
  name: 'Offline calendar',
  id: 'local-first',
  color: '#f97c17'
}

var obj = {
  remote: {
    name: 'Offline calendar',
    id: 'local-first',
    color: '#f97c17'
  },
  _id: 'xifei',
}
var objs = {}
objs[obj._id] = obj

var id, key;
for (id in objs) {
  var remote = objs[id].remote;
  for (key in remote) {
    objs[id][key] = remote[key];
  }
}
var remote = obj.remote;
for (var key in remote) {
  obj[key] = remote[key];
}


/////////////////
  var calendarList = [
    {
      error: undefined,
      remote: {
        color:'#00aacc',
        description:'iscas2012@gmail.com',
        id:'/caldav/v2/iscas2012%40gmail.com/events/',
        name:'iscas2012@gmail.com',
        privilegeSet:['read', 'read-free-busy',
        'read-current-user-privilege-set', 'write', 'write-content',
        'write-properties', 'bind', 'unbind'],
        syncToken:'63585068751',
        url:'/caldav/v2/iscas2012%40gmail.com/events/'
      },
      accountId: 1,
      localDisplayed: true,
      lastEventSyncDate: 'new Date()',
      lastEventSyncToken: '63585068751',
      firstEventSyncDate: 'new Date()',
      _id: 1
    },

    {
      error: undefined,
      remote: {
        color: '#ff0000',
        name: 'Google Holiday'
      },
      accountId: 1,
      localDisplayed: false,
      lastEventSyncDate: new Date(),
      lastEventSyncToken: '63585157993',
      firstEventSyncDate: new Date(),
      _id: 2
    },
    {
      error: undefined,
      remote:  {
        color: '#00ff00',
        name: 'Google Home'
      },
      accountId: 1,
      localDisplayed: false,
      lastEventSyncDate: new Date(),
      lastEventSyncToken: '63585157993',
      firstEventSyncDate: new Date(),
      _id: 3
    },
    {
      error: undefined,
      remote:  {
        color: '#0000ff',
        name: 'Yahho Holiday'
      },
      accountId: 2,
      localDisplayed: true,
      lastEventSyncDate: new Date(),
      lastEventSyncToken: '1-2',
      firstEventSyncDate: new Date(),
      _id: 4
    },
    {
      error: undefined,
      remote: {
        name: 'Offline calendar',
        color: '#f97c17'
      },
      accountId: '0f428110-931a-481f-b637-b03687a020cd',
      localDisplayed: false,
      lastEventSyncDate: '',
      lastEventSyncToken: '',
      firstEventSyncDate: null,
      _id: 'local-first'
    }
  ];
  calendarObj = {};
  calendarList.forEach(function(element) {
    calendarObj[element._id] = element;
    for (var key in element.remote) {
      calendarObj[element._id][key] = element.remote[key];
    }
  });

  var id, key;
  for (id in calendarObj) {
    if (calendarObj[id].remote) {
      var remote = calendarObj[id].remote;
      for (key in remote) {
        calendarObj[id][key] = remote[key];
      }
    }
  }
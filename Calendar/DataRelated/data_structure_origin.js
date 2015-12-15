event: {
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

event to store 
eventToStore = {
  calendarId: 'local-first',
  remote: {
    "title": "AB4555",
    "location": "ila",
    "repeat": "never",
    "calendarId": "local-first",
    "description": "dd",
    "startDate": "1970-01-13T12:00:00.000Z",
    "endDate": "1970-01-13T13:00:00.000Z",
    "alarms": [{
        "action": "DISPLAY",
        "trigger": -300
    }]
  }
}

calendar:
{
  error: undefined,
  remote: 
  {
    color:"#00aacc",
    description:"iscas2012@gmail.com",
    id:"/caldav/v2/iscas2012%40gmail.com/events/",
    name:"iscas2012@gmail.com",
    privilegeSet:["read", "read-free-busy", "read-current-user-privilege-set", "write", "write-content", "write-properties", "bind", "unbind"],
    syncToken:"63585068751",
    url:"/caldav/v2/iscas2012%40gmail.com/events/"
  },
  accountId: 1,
  localDisplayed: true,
  lastEventSyncDate: Date 2015 - 12 - 06T07: 20 : 02.326Z,
  lastEventSyncToken: "63585068751",
  firstEventSyncDate: Date 2015 - 11 - 27T16: 00 : 00.000Z,
  _id: 1
}

{
  error: undefined,
  remote: Object,
  accountId: 1,
  localDisplayed: false,
  lastEventSyncDate: Date 2015 - 12 - 07T09: 26 : 12.266Z,
  lastEventSyncToken: "63585157993",
  firstEventSyncDate: Date 2015 - 11 - 27T16: 00 : 00.000Z,
  _id: 2
}
{
  error: undefined,
  remote: Object,
  accountId: 1,
  localDisplayed: false,
  lastEventSyncDate: Date 2015 - 12 - 07T09: 26 : 12.266Z,
  lastEventSyncToken: "63585157993",
  firstEventSyncDate: Date 2015 - 11 - 27T16: 00 : 00.000Z,
  _id: 3
}
{
  error: undefined,
  remote: Object,
  accountId: 2,
  localDisplayed: true,
  lastEventSyncDate: Date 2015 - 12 - 07T10: 36 : 29.910Z,
  lastEventSyncToken: "1-2",
  firstEventSyncDate: Date 2015 - 12 - 06T16: 00 : 00.000Z,
  _id: 4
}
{
  error: undefined,
  remote: {
    color: "#f97c17",
    id: "local-first",
    name: "Offline calendar",
  },
  accountId: "0f428110-931a-481f-b637-b03687a020cd",
  localDisplayed: false,
  lastEventSyncDate: "",
  lastEventSyncToken: "",
  firstEventSyncDate: null,
  _id: "local-first"
}


##account:
{
  entrypoint: "/caldav/v2/",
  calendarHome: "/caldav/v2/iscas2012%40gmail.com/",
  domain: "https://apidata.googleusercontent.com",
  password: "",
  user: "iscas2012@gmail.com",
  providerType: "Caldav",
  preset: "google",
  oauth: Object,
  error: undefined,
  _id: 1
}
{
  entrypoint: "/",
  calendarHome: "/dav/xifei.wu/Calendar/",
  domain: "https://caldav.calendar.yahoo.com",
  password: "Acadinewxf2015",
  user: "xifei.wu@yahoo.com",
  providerType: "Caldav",
  preset: "yahoo",
  oauth: undefined,
  error: undefined,
  _id: 2
}
{
  entrypoint: "",
  calendarHome: "",
  domain: "",
  password: "",
  user: "",
  providerType: "Local",
  preset: "local",
  oauth: undefined,
  error: undefined,
  _id: "0f428110-931a-481f-b637-b03687a020cd"
}


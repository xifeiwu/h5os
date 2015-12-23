<li class="pack-select sk-modify-event-calendar-id calendar-id" role="presentation" tabindex="0">
  <a class="menu-item" nav-scope="" nav-ignore="">
    <small aria-label="Calendar" data-l10n-id="calendar">Calendar</small>
    <select name="calendarId" class="undefined" nav-scope="nav-9" nav-ignore="">
    <option value="WORK">WORK</option>
    <option value="local-first" data-l10n-id="calendar-local">Home</option>
    </select>
  </a>
</li>


_onCalendarDisplayToggle: function(e) {
  var input = e.target;
  var id = input.value;

  if (this._updateTimeouts[id]) {
    clearTimeout(this._updateTimeouts[id]);
  }

  this._updateTimeouts[id] = setTimeout(
    this._persistCalendarDisplay.bind(this, id, !!input.checked),
    this.WAIT_BEFORE_PERSIST
  );
},

# for navigation_map reconstruction
  currentContainerID = 'month-view';
  this.navSetup('month-view', '.month.active .focusable');
  var currentDate = new Date();
  this.setFocusOnMonthView(currentDate);


  var container = (containerId === undefined) ? document.body :
               document.getElementById('month-view');

  if (container) {
    elements = container.querySelectorAll(query);
    if (elements.length > 0) {
      switch(containerId) {
        case MONTH_VIEW:
          monthViewNavUpdate(elements);

# get and set value in db Setting
  var settings = this.app.store('Setting');
  var layout = isAllDay ? 'allday' : 'standard';
  settings.getValue(layout + 'AlarmDefault', next.bind(this));

# data passed in dispatch of event_base.js
data passed to dispatch:
canonicalPath:;
params: [id: 'local-first-d761afc0-3242-4725-a2ff-99b090f4662d-a6b99115-0649-4c03-85d7-91095e142fa6'];
path: '/event/detail/local-first-d761afc0-3242-4725-a2ff-99b090f4662d-a6b99115-0649-4c03-85d7-91095e142fa6';
pathname:
title:

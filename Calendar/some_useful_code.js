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

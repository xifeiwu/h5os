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

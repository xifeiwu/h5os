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

# some code for h5Dialog
/**
 * When the dialogTextInput get focus, the owner of softkey is
 * Input Method, so we have to listen the keydown event,
 * and do something we need.
 * dpe key is used to get the value in dialogTextInput, as the evt.key
 * passed to dialogTextInput is undefined, evt.keyCode is used.
 * lsk is used to cancel the operation of input, if we do not stop
 * keydown propagation, the key down event will be passed to the current
 * page, it is not we want. The evt.keyCode passed to dialogTextInput
 * is 0, which is no correct, so evt.key is used.
*/
this.h5Dialog.dialogTextInput.addEventListener('keydown', (evt) => {
  if (evt.keyCode === KeyEvent.DOM_VK_RETURN) {
    switch (this._currentDialogAction) {
      case 'add':
        this._saveCalendar(this.h5Dialog.dialogTextInput.value.trim());
        break;
      case 'rename':
        this._renameCalendar(this.h5Dialog.dialogTextInput.value.trim());
        break;
    }
    evt.stopPropagation();
    evt.preventDefault();
  }
  if (evt.key === 'AcaSoftLeft') {
      this._closeDialog();
      evt.stopPropagation();
      evt.preventDefault();
  }
});

this.h5Dialog.addEventListener('keydown', (evt) => {
  switch (evt.key) {
    case 'AcaSoftLeft':
      this._closeDialog();
      evt.stopPropagation();
      evt.preventDefault();
    break;
    case 'AcaSoftRight':
      if (this._currentDialogAction &&
          this._currentDialogAction === 'delete') {
        this._deleteCalendar();
      }
      evt.stopPropagation();
      evt.preventDefault();
    break;
  }
});


(function(exports) {	
  var SystemSoftKeys = function() {};
  SystemSoftKeys.EVENTS = [
    'keyboard-activated',
    'keyboard-deactivated',
    'hierarchychanged'
  ];
  SystemSoftKeys.prototype = {
    DEBUG: false,
    name: 'SystemSoftKeys',

    element: undefined,
    active: false,

    _start: function() {
      this.onPrinted = this.onPrinted.bind(this);
      this.element = document.getElementById('system-soft-keys');

      SoftKeysHelper.start(true);
      SoftKeysHelper.on('soft-keys-printed', this.onPrinted);

      // TODO: listen to those events emitted when system UI like
      // alert, confirm, prompt, value selector, rocketbar ... etc
      // are going to display or hide.
      SystemSoftKeys.EVENTS.forEach((event) => {
        window.addEventListener(event, this);
      });
    },

    _stop: function() {
      SystemSoftKeys.EVENTS.forEach((event) => {
        window.removeEventListener(event, this);
      });

      SoftKeysHelper.off('soft-keys-printed', this.onPrinted);
      SoftKeysHelper.stop();
    },

    handleEvent: function(evt) {
      switch(evt.type) {
        case 'hierarchychanged':
          var topMostUI = Service.query('getTopMostUI');
          if (topMostUI &&
              topMostUI.name.indexOf('WindowManager') >= 0 &&
              topMostUI.name !== 'LockScreenWindowManager') {
            this.deactivate();
          } else {
            this.activate();
          }
          break;
        case 'keyboard-activated':
          this.activate();
          this.onPrinted();
          break;
        case 'keyboard-deactivated':
          this.deactivate();
          this.onPrinted();
          break;
      }
    },

    activate: function() {
      this.active = true;
      this.element.classList.add('active');
    },

    deactivate: function() {
      this.active = false;
      this.element.classList.remove('active');
    },

    onPrinted: function(keys) {
      var softKeys = this.element.children;
      // if (Service.query('KeyboardManager.activated')) {
      //   softKeys[0].textContent = Service.query('KeyboardManager.lsk');
      //   softKeys[1].textContent = Service.query('KeyboardManager.dpe');
      //   softKeys[2].textContent = Service.query('KeyboardManager.rsk');
      // } else {
        var keysObject;

        if (keys) {
          // Parse the keys meta and convert it to an object for later use.
          keysObject = keys.split(/,\s*/).reduce(function(obj, key) {
            var a = key.split('=');
            obj[a[0]] = a[1];

            return obj;
          }, {});
        } else {
          keysObject = SoftKeysHelper.registeredKeys();
        }

        // lsk = Left-Soft-Key, dpe = D-Pad-Enter, rsk = Right-Soft-Key.
        softKeys[0].textContent = keysObject.lsk;
        softKeys[1].textContent = keysObject.dpe;
        softKeys[2].textContent = keysObject.rsk;
      // }
    }
  };
  exports.systemSoftKeys = new SystemSoftKeys();
})(window);

window.onload = function() {
	SoftKeysHelper.registerKeys({
		lsk: 'Back',
		rsk: 'Options'
	}, root);
	SoftKeysHelper.registerKeys({
		dpe: 'SelectA',		
		rsk: ''
	}, a);
	SoftKeysHelper.registerKeys({
		dpe: 'SelectB'
	}, b);
	SoftKeysHelper.registerKeys({
		dpe: 'SelectC'
	}, c);
	
systemSoftKeys._start();
};

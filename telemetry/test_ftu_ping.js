(function(exports){
  const FTU_PING_ACTIVATION = 'ftu.pingActivation';
  const FTU_PING_ENABLED = 'ftu.pingEnabled';
  const FTU_PING_ID = 'ftu.pingID';
  const FTU_PING_MAX_NETWORK_FAILS = 'ftu.pingMaxNetworkFails';
  const FTU_PING_NETWORK_FAIL_COUNT = 'ftu.pingNetworkFailCount';
  const FTU_PING_URL = 'ftu.pingURL';
  const FTU_PING_TIMEOUT = 'ftu.pingTimeout';
  const FTU_PING_TRY_INTERVAL = 'ftu.pingTryInterval';

  const DEFAULT_TRY_INTERVAL = 60 * 60 * 1000;
  const DEFAULT_MAX_NETWORK_FAILS = 24;
  const DEFAULT_PING_TIMEOUT = 60 * 1000;

  // Used by the telemetry server to help identify the payload format
  const TELEMETRY_VERSION = 1;
  const TELEMETRY_REASON = 'ftu';

  // Settings to observe value changes for while the ping has not been sent
  const OBSERVE_SETTINGS = ['deviceinfo.os',
                            'deviceinfo.software',
                            'deviceinfo.product_model',
                            'deviceinfo.firmware_revision',
                            'deviceinfo.hardware',
                            'findmydevice.enabled'];

  const URL_SETTINGS = ['deviceinfo.platform_build_id',
                        'deviceinfo.platform_version',
                        'app.update.channel'];
  function TestFtuPing() {

  }
  TestFtuPing.prototype = {
    getAsyncStorageItems: function fp_getAsyncStorageItems(itemKeys, callback) {
      var itemsLeft = itemKeys.length;
      console.log(itemKeys.length);
      var items = {};
      itemKeys.forEach(function(key) {
        window.asyncStorage.getItem(key, function(value) {
          itemsLeft--;
          items[key] = value;
          if (itemsLeft === 0 && callback) {
            callback(items);
          }
        });
      });
    },
    testAsyncStorageItems : function fp_test(){
      self = this;
      console.log("in test");
      self.getAsyncStorageItems([FTU_PING_ID, 
          FTU_PING_ACTIVATION,
          FTU_PING_ENABLED,
          FTU_PING_NETWORK_FAIL_COUNT],
          function(items) {
            console.log(items);
          });
    },

    getSettings: function fp_getSettings(settingKeys, callback) {
      var settingsLeft = settingKeys.length;
      var settings = {};
      var lock = window.navigator.mozSettings.createLock();
      settingKeys.forEach(function(key) {
        var request = lock.get(key);
        request.onsuccess = function(evt) {
          var value = request.result[key];
          settingsLeft--;
          settings[key] = value;
          if (settingsLeft === 0 && callback) {
            callback(settings);
          }
        };
      });
    },
    testGetSettings: function(){
      var allSettings = [FTU_PING_URL, FTU_PING_TRY_INTERVAL,
                             FTU_PING_TIMEOUT, FTU_PING_MAX_NETWORK_FAILS].
                            concat(OBSERVE_SETTINGS);
      allSettings = allSettings.concat(URL_SETTINGS);
      self.getSettings(allSettings, function(settings) {
        console.log(settings);
      });
    },
  };
  exports.TestFtuPing = new TestFtuPing();
})(window);
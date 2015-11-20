0. 
  const variable in ftu_ping.js
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
                            'deviceinfo.last_updated',
                            'deviceinfo.platform_version',
                            'deviceinfo.platform_build_id',
                            'findmydevice.enabled'];

  const URL_SETTINGS = ['deviceinfo.platform_build_id',
                        'deviceinfo.platform_version',
                        'app.update.channel'];

1.Abstract
Where are related files?
Related parameters is accquired in the file apps/system/js/ftu_ping.js, the start point function is ensurePing().
window.TelemetryRequest is exported in file apps/system/shared/telemetry/telemetry.js, function TelemetryRequest.getDeviceID() is used in ftu_ping.
window.FtuPing is only called in system/js/ftu_launcher.js

1.1 About ftu_launcher.js
//Only a object FtuLauncher is created, and then FtuLauncher.init() is called.
ftu_ping.js(FtuPing) is only called in ftu_launcher.js(FtuLauncher)
ftu_launcher.js is only call in launcher.js
BaseModule is used in ftu_launcher.js
window.Service is only call in js/base_module.js
baseModule.instantiate is called in js/app.js
system/js/base_module.js
system/js/ftu_launcher.js

1.2 How get data send by ftu_ping.js
1.2.1 How to get parameters in WebIDL?
var ftuping = new FtuPing();
ftuping.ensurePing();
some parameters is get through function tryPing()
ftuping.tryPing();
ftuping.assemblePingData();
1.2.2 show the data send to server
ftuping._pingData

1.3 Some information about ftu_ping
The actual data sent to server is _pingData, which is sent by global object TelemetryRequest.
work flow of ftu_ping:
ensurePing->initSettings->initPreinstalledApps->startPing->tryPing->checkMobileNetwork->ping

1.4 Where the data is get(set)?
initSettings:
    self._pingData.screenHeight = window.screen.height;
    self._pingData.screenWidth = window.screen.width;
    self._pingData.devicePixelRatio = window.devicePixelRatio;
    self._pingData.locale = window.navigator.language;
    self._pingData.pingID
    self._pingData.activationTime
    self._pingData.deviceinfo.os
    self._pingData.deviceinfo.software
    self._pingData.deviceinfo.product_model
    self._pingData.deviceinfo.firmware_revision
    self._pingData.deviceinfo.hardware
    self._pingData.deviceinfo.last_updated
    self._pingData.deviceinfo.platform_version
    self._pingData.deviceinfo.platform_build_id
    self._pingData.findmydevice.enabled
//initIMID
    self._pingData.deviceinfo.MEID
// assemblePingData
    self._pingData.deviceinfo.update_channel

initPreinstalledApps:
    self._pingData.preinstalled = {};
checkMobileNetwork
    self._pingData.network
    self._pingData.icc
    /* type of network and icc
    "network": {
      "mcc": "216",
      "mnc": "70",
      "operator": "vodafone HU vodafone"
    },
    "icc": {
      "spn": "vodafone",
      "mcc": "216",
      "mnc": "70"
    },
    */
ping:
    self._pingData.pingTime = Date.now();
    self._pingData.local = window.navigator.language

{
  "activationTime": 1398300000000,
  "devicePixelRatio": 1,
  "deviceinfo.MEID": [123456789012345, 123456789012345],
  "deviceinfo.firmware_revision": "",
  "deviceinfo.hardware": "qcom",
  "deviceinfo.last_updated": "",
  "deviceinfo.os": "2.0.0.0-prerelease",
  "deviceinfo.platform_build_id": "20150817143800",
  "deviceinfo.platform_version": "37.0",
  "deviceinfo.product_model": "go_flip",
  "deviceinfo.software": "Boot2Gecko 2.2.0.0-prerelease",
  "deviceinfo.update_channel": "default",
  "findmydevice.enabled": "",
  "icc": [
{
      "spn": "vodafone",
      "mcc": "216",
      "mnc": "70"
   },
{
      "spn": "vodafone",
      "mcc": "216",
      "mnc": "70"
     }
  ],
  "network": [
{
    "mcc": "216",
    "mnc": "70",
    "operator": "vodafone HU vodafone"
},
{
      "mcc": "216",
      "mnc": "70",
      "operator": "vodafone HU vodafone"
        }
     ],
  "locale": "hu",
  "pingID": "8f1bbb30-a1f0-4403-938f-88acf19df5ad",
  "preinstalled": {
     app://deviceinfo.h5os/manifest.webapp:"DeviceInfo",
     http://mochi.test:8888/manifest.webapp:"Mochitest"
   }
  "info": {
    "appUpdateChannel": "default",
    "reason": "ftu",
    "appVersion": "31.0a1",
    "geoCountry": "HU",
    "appName": "FirefoxOS",
    "appBuildID": "20140423185429"
  },
  "pingTime": 1398300000000,
  "screenWidth": 320,
  "screenHeight": 480,
  "ver": 2
}

2.Related Code
var _pingData = {}
2.1
const FTU_PING_ID = 'ftu.pingID';
  var promise = TelemetryRequest.getDeviceID(FTU_PING_ID);
  promise.then(function(deviceID) {
    console.log('Found deviceID: ' + deviceID);
    _pingData.pingID = deviceID;
    // resolve();
  }).catch(function(error) {
    console.log('Generating deviceID: ' + error);
    _pingData.pingID = uuid();
    window.asyncStorage.setItem(FTU_PING_ID, _pingData.pingID);
    // resolve();
  });
2.2
const FTU_PING_URL = 'ftu.pingURL';
  asyncStorage.getItem('ftu.pingID', function(value) {
    console.log('The value of key is:', value);
  });
  var dialPromise = navigator.mozTelephony.dial('*#06#', 0);
  dialPromise.then(function(call) {
    return call.result;
  }).then(function(result) {
    return result.statusMessage;
  }).then(function (imei) {
    console.log(imei);
  }).catch(function(){console.log("Error");});

2.3
const FTU_PING_ACTIVATION = 'ftu.pingActivation';
const FTU_PING_ENABLED = 'ftu.pingEnabled';
const FTU_PING_NETWORK_FAIL_COUNT = 'ftu.pingNetworkFailCount';
  function getAsyncStorageItems(itemKeys, callback) {
    var itemsLeft = itemKeys.length;
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
  }

	getAsyncStorageItems([FTU_PING_ACTIVATION,
                       FTU_PING_ENABLED,
                       FTU_PING_NETWORK_FAIL_COUNT],
                      function(items) {
    var activationTime = items[FTU_PING_ACTIVATION];
    var _pingEnabled = items[FTU_PING_ENABLED];
		var _networkFailCount = items[FTU_PING_NETWORK_FAIL_COUNT];
    console.log("activationTime: " + activationTime);
    console.log("_pingEnabled: " + _pingEnabled);
    console.log("_networkFailCount: " + _networkFailCount);
	});

2.4
// Settings to observe value changes for while the ping has not been sent
const OBSERVE_SETTINGS = ['deviceinfo.os',
                          'deviceinfo.software',
                          'deviceinfo.product_model',
                          'deviceinfo.firmware_revision',
                          'deviceinfo.hardware',
                          'deviceinfo.last_updated',
                          'deviceinfo.platform_version',
                          'deviceinfo.platform_build_id',
                          'findmydevice.enabled'];
const URL_SETTINGS = ['deviceinfo.platform_build_id',
                      'deviceinfo.platform_version',
                      'app.update.channel'];
const FTU_PING_URL = 'ftu.pingURL';
const FTU_PING_TIMEOUT = 'ftu.pingTimeout';
const FTU_PING_TRY_INTERVAL = 'ftu.pingTryInterval';
const DEFAULT_MAX_NETWORK_FAILS = 24;
  function self_getSettings(settingKeys, callback) {
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
  }
  function getSettings() {
    var allSettings = [FTU_PING_URL, FTU_PING_TRY_INTERVAL,
                       FTU_PING_TIMEOUT, FTU_PING_MAX_NETWORK_FAILS].
                      concat(OBSERVE_SETTINGS);
    allSettings = allSettings.concat(URL_SETTINGS);
    self_getSettings(allSettings, function(settings) {
      console.log(settings);
      for(var key in settings){
        console.log(key + ": " + settings[key]);
      }
    });
  }
  /**
    "ftu.pingURL: https://fxos.telemetry.mozilla.org/submit/telemetry"
    ftu.pingTryInterval: undefined
    ftu.pingTimeout: undefined
    ftu.pingMaxNetworkFails: undefined
    deviceinfo.os: 2.2.0.0-prerelease
    deviceinfo.software: Boot2Gecko 2.2.0.0-prerelease
    deviceinfo.product_model: go_flip
    deviceinfo.firmware_revision: 
    deviceinfo.hardware: qcom
    deviceinfo.last_updated: undefined
    deviceinfo.platform_version: 37.0
    deviceinfo.platform_build_id: 20150817143800
    findmydevice.enabled: undefined
    app.update.channel: default
  */

2.5
self._pingData.screenHeight = window.screen.height;
self._pingData.screenWidth = window.screen.width;
self._pingData.devicePixelRatio = window.devicePixelRatio;
this._pingData.pingTime = Date.now();
this._pingData.locale = window.navigator.language;
appName: 'H5OS'
const DEFAULT_TRY_INTERVAL = 60 * 60 * 1000;
const DEFAULT_MAX_NETWORK_FAILS = 24;
const DEFAULT_PING_TIMEOUT = 60 * 1000;
// Used by the telemetry server to help identify the payload format
const TELEMETRY_VERSION = 1;
const TELEMETRY_REASON = 'ftu';

2.6
this._pingData.preinstalled
  function initPreinstalledApps(){
    window.navigator.mozApps.mgmt.getAll().onsuccess = function(evt) {
          var preinstalled = {};
          var apps = evt.target.result;
          apps.forEach(function(app) {
            var url;
            try {
              url = new URL(app.manifestURL);
            } catch (e) {
              // Don't die if somehow the manifestURL is invalid
            }
            // Only report non-gaia apps
            if (!url || url.hostname.indexOf('gaiamobile.org') === -1) {
              preinstalled[app.manifestURL] = app.manifest.name;
              console.log(app.manifestURL + ": " + app.manifest.name);
            }
          });
    };
  }

2.7
network and icc are append to _pingData in function checkMobileNetwork, which is called in function tryPing().
  _pingData.network = [];
  _pingData.icc = [];

  function getNetworkAndICC(){
    if (SIMSlotManager.noSIMCardConnectedToNetwork()) {
      console.log('No SIM cards connected to a network');
    }
    var conns = window.navigator.mozMobileConnections;
    if (!conns || conns.length === 0) {
      console.log('No mobile connections');
      return;
    }

    var slots = SIMSlotManager.getSlots().filter(function(slot) {
      return !slot.isAbsent() && !slot.isLocked();
    });

    if (slots.length === 0) {
      console.log('No unlocked or active SIM cards found');
      return;
    }
  }

2.8 not found place where deviceinfo.last_updated is set
apps/settings/build_stage/settings/js/panels/about/panel.js:      var key = 'deviceinfo.last_updated';
apps/settings/js/panels/about/update_check.js:      var key = 'deviceinfo.last_updated';
apps/system/js/ftu_ping.js:                            'deviceinfo.last_updated',
.repo/project-objects/system.git/rr-cache/2cf5d1eb755bcb7fcacee74ebf725ea72507a2c6/preimage:                            'deviceinfo.last_updated',

  etImei().then(function (imeis) {
            console.log('imeis : ' + imeis);
            self._pingData['deviceinfo.MEID'] = imeis;
          });

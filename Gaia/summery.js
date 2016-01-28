# The format of soft_key defined in System App
<meta name="soft-keys" content="lsk=Back, dpe=Select, rsk=Ok">
# Code realted
var SoftKeysHelper = {
  _emptyKeys: { lsk: '', dpe: '', rsk: '' },

  _revertKeys: function(plainKeys) {
    var keyArray = plainKeys.split(/,\s*/);
    var keys = {};
    for (var key in this._emptyKeys) {
      keys[key] = this._emptyKeys[key];
    }
    keyArray.forEach(function(key) {
      var a = key.split('=');
      keys[a[0]] = a[1];
    });
    return keys;
  },

  _convertKeys: function(keys) {
    var plainKeys = '';
    var count = 0;
    var keyCount = Object.keys(this._emptyKeys).length;
    for (var key in this._emptyKeys) {
      // Fill the missing key with empty value.
      if (!keys[key]) {
        keys[key] = this._emptyKeys[key];
      }
      count++;
      var comma = (count === keyCount) ? '' : ', ' ;
      var keyText = key + '=' + keys[key] + comma;
      plainKeys = plainKeys + keyText;
    }
    return plainKeys;
  }
}
var keys = {lsk: 'Back', dpe: 'Select', rsk: 'Ok'};
console.log(SoftKeysHelper._convertKeys(keys));
var plainKeys = 'lsk=Back, dpe=Select, rsk=Ok';
console.log(SoftKeysHelper._revertKeys(plainKeys));
function getVersion(ver) {
  "use strict";
  let version = ver;
  if (!version) {
    version = 'default';
  }
  return version;
}

var version = getVersion();
console.log(version);
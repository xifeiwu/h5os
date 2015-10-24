window.FtuLauncher.isFtuRunning()
window.Service.applicationReady
window.Service.currentApp
for(var [key,value] of window.Service._states) {
  console.log(key + "=>" + value);
}
FtuLauncher._ftuPing._networkFailCount

//window.asyncStorage
window.asyncStorage

// For Featuer Phone
window.Service._providers
for(var [key, value] of window.Service._providers) {
  console.log(key + "=>" value);
}


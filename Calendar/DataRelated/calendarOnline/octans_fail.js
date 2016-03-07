＃ error logged by feature-phone calendar.
worker/manager [calendar]  "data posted by manager: {\"id\":0,\"role\":\"caldav\",\"payload\":[\"getAccount\",{\"entrypoint\":\"/\",\"calendarHome\":\"\",\"domain\":\"https://caldav.calendar.yahoo.com\",\"password\":\"15712872803\",\"user\":\"xifei.wu@yahoo.com\",\"providerType\":\"Caldav\",\"preset\":\"yahoo\"}]}" bundle.js:3018:4
worker/thread [calendar]  "Will listen for messages from the main thread..." caldav_worker.js:1473:4
worker/manager [calendar]  {"name":"worker","message":"worker/initialize, [calendar] , \"Will create new caldav service...\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"Will listen for worker events...\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"worker/thread, [calendar] , \"data received by thread: {\\\"id\\\":0,\\\"role\\\":\\\"caldav\\\",\\\"payload\\\":[\\\"getAccount\\\",{\\\"entrypoint\\\":\\\"/\\\",\\\"calendarHome\\\":\\\"\\\",\\\"domain\\\":\\\"https://caldav.calendar.yahoo.com\\\",\\\"password\\\":\\\"15712872803\\\",\\\"user\\\":\\\"xifei.wu@yahoo.com\\\",\\\"providerType\\\":\\\"Caldav\\\",\\\"preset\\\":\\\"yahoo\\\"}]}\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"Worker will fulfill\", \"getAccount\", \"request...\", \"with data: \", \"[{\\\"entrypoint\\\":\\\"/\\\",\\\"calendarHome\\\":\\\"\\\",\\\"domain\\\":\\\"https://caldav.calendar.yahoo.com\\\",\\\"password\\\":\\\"15712872803\\\",\\\"user\\\":\\\"xifei.wu@yahoo.com\\\",\\\"providerType\\\":\\\"Caldav\\\",\\\"preset\\\":\\\"yahoo\\\"},null]\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"Fetching account from:\", \"/\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"Will issue calendar home request.\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"data received by getAccount in service/caldav: undefined\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"Error sending home request:\", {\"message\":\"Cannot handle request due to server response\",\"name\":\"caldav-unknown\",\"stack\":\"createError/Errors[def.symbol]@app://calendar.gaiamobile.org/js/ext/caldav.js:1340:15\\ndetermineHttpStatusError@app://calendar.gaiamobile.org/js/ext/caldav.js:2128:12\\nonReadyStateChange@app://calendar.gaiamobile.org/js/ext/caldav.js:2301:20\\n\"}"} bundle.js:3018:4
Error with name: caldav-unknown bundle.js:4559:2


# error log in feature-phone when add yahoo account
worker/thread [calendar]  "Will listen for messages from the main thread..." caldav_worker.js:1473:4
worker/manager [calendar]  {"name":"worker","message":"worker/initialize, [calendar] , \"Will create new caldav service...\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"Will listen for worker events...\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"Worker will fulfill\", \"getAccount\", \"request...\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"Fetching account from:\", \"/\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"Will issue calendar home request.\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"Error sending home request:\", {\"message\":\"Cannot handle request due to server response\",\"name\":\"caldav-unknown\",\"stack\":\"createError/Errors[def.symbol]@app://calendar.gaiamobile.org/js/ext/caldav.js:1340:15\\ndetermineHttpStatusError@app://calendar.gaiamobile.org/js/ext/caldav.js:2128:12\\nonReadyStateChange@app://calendar.gaiamobile.org/js/ext/caldav.js:2301:20\\n\"}"} bundle.js:3018:4
Error with name: caldav-unknown bundle.js:4559:2
"L10nError: "error-caldav-unknown" not found in en-US in app://calendar.gaiamobile.org/index.html"

# can delete
worker/thread [calendar]  "Will listen for messages from the main thread..." caldav_worker.js:1473:4
worker/manager [calendar]  {"name":"worker","message":"worker/initialize, [calendar] , \"Will create new caldav service...\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"Will listen for worker events...\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"Worker will fulfill\", \"getAccount\", \"request...\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"Fetching account from:\", \"/\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"Will issue calendar home request.\""} bundle.js:3018:4
worker/manager [calendar]  {"name":"worker","message":"service/caldav, [calendar] , \"Error sending home request:\", {\"message\":\"Cannot handle request due to server response\",\"name\":\"caldav-unknown\",\"stack\":\"createError/Errors[def.symbol]@app://calendar.gaiamobile.org/js/ext/caldav.js:1345:15\\ndetermineHttpStatusError@app://calendar.gaiamobile.org/js/ext/caldav.js:2133:12\\nonReadyStateChange@app://calendar.gaiamobile.org/js/ext/caldav.js:2306:20\\n\"}"} bundle.js:3018:4
Error with name: caldav-unknown bundle.js:4559:2

"L10nError: "error-caldav-unknown" not found in en-US in app://calendar.gaiamobile.org/index.html"
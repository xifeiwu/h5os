// The use of Map.
var days = new Map();
days.set('first', 'Monday');
days.set('second', 'Tuesday');
days.set('three', 'Wendesday');
for (var key of days.keys()) {
  console.log(days.get(key))
}

// This demo shows that the data returned from Map is reference.
var cache = new Map();
function setDay() {
  for (var i = 0; i < 5; i++) {
    var day = {
      id: i,
      date: new Date()
    }
    cache.set(i, day);
  }
}
function showDay() {
  for (var key of cache.keys()) {
    console.log(cache.get(key))
  }
}
setDay();
var day = cache.get(3);
day.tag = true;
showDay();

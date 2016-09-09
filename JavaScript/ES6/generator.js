function ticketGenerator(){
  yield 1;
  yield 2;
  yield 3;
}
var takeANumber = ticketGenerator();   
takeANumber.next();   
//>{value: 1, done: false}   
takeANumber.next();
//>{value: 2, done: false}
takeANumber.next();  
//>{value: 3, done: false}
takeANumber.next();
//>{value: undefined, done: true}


// 影响generator的状态
function* ticketGenerator(){
  for(var i=0; true; i++){
    var reset = yield i;
    if(reset) {i = -1;}
  }
}
var takeANumber = ticketGenerator();   
console.log(takeANumber.next().value); //0   
console.log(takeANumber.next().value); //1   
console.log(takeANumber.next(true).value); //2  
console.log(takeANumber.next().value); //3  
console.log(takeANumber.next().value); //4

// 用generator替代回调函数
function delay(time, callback){
  setTimeout(function(){
    callback("Slept for "+time);
  },time);
}
// 回调的方式
delay(1000, function(msg) {
  console.log(msg);
  delay(1200, function(msg) {
    console.log(msg);
    delay(2000, function(msg) {
      console.log(msg);
    })
  });
});
// 用generator替代回调函数
function* myDelayedMessages(resume) { 
  console.log(yield delay(1000, resume));
  console.log(yield delay(1200, resume));
}
function run(generatorFunction) { 
  var generatorItr = generatorFunction(resume); 
  function resume(callbackValue) {
    generatorItr.next(callbackValue);
  }
  generatorItr.next();
}
run(myDelayedMessages);


// iterate object by generator
var obj = {
  a: 1,
  b: 2,
  c: 3
}
function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}
for (let [key, value] of entries(obj)) {
  console.log(key, "->", value);
}
// a -> 1
// b -> 2
// c -> 3

var screenStatus = null;
function showLoadingScreen() {
  screenStatus = "on";
  console.log(screenStatus);
}
function hideLoadingScreen() {
  screenStatus = "off";
  console.log(screenStatus);
}
function* loadUI() {
  showLoadingScreen();
  var nextStep = yield 'has loaded.';
  switch(nextStep) {
    case 'on':
      showLoadingScreen();
      break;
    case 'off':
      hideLoadingScreen();
      break;
    default:
      console.log('no selected.');
      break;
  }
}
var loader = loadUI();
// 加载UI
loader.next();
// 卸载UI
loader.next();
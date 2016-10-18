new Promise(function(resolve,reject){
  reject("你是好人"); //产生reject，参数"你是好人"
})
//接到reject，then不处理reject，跳过此段
.then(function(e){ 
	console.log("1 then "+e); 
})
//接到reject，处理参数"你是好人"，默认返回resolve(undefine)
.catch(function(e){
 	console.log("2 catch "+e);
 	return "2 catch " + e;
})
//接到resolve，处理参数undefine，手动返回resolve("啊？")
.then(function(e){
  console.log("3 then "+e);
  return Promise.resolve("啊？");
})
//接到resolve，catch不处理resolve，跳过此段
.catch(function(e){ console.log("4 catch "+e); })
//接到resolve，处理参数"啊？"，默认返回resolve(undefine)
.then(function(e){ console.log("5 then "+e); });
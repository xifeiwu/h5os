/** some common function of RegExp and String.
 * exec  一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回null）。
 * test  一个在字符串中测试是否匹配的RegExp方法，它返回true或false。
 * search  一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。
**/

// RegExp.exec
function regExpExec(uaString) {
  var uaString = 'com.sankuai.moviepro/Android/2.0.1';
  var platformReg = /com.sankuai.moviepro\/(\w+)\/([\w\.]+)/i;
  var platform = platformReg.exec(uaString);
  var version = platform && platform[2] ? platform[2] : '';
  console.log(platform);
}
regExpExec();
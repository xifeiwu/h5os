/** some common function of RegExp and String.
 * exec  一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回null）。
 * test  一个在字符串中测试是否匹配的RegExp方法，它返回true或false。
 * match 一个在字符串中执行查找匹配的String方法，它返回一个数组或者在未匹配到时返回null。
 * search  一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。
 * replace 一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。
 * split 一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的String方法。
**/

function toCamelCase(string) {
  return string.replace(/-(.)/g, function replacer(string, p1) {
    var args =  Array.prototype.slice.call(arguments);
    return p1.toUpperCase();
  });
};
toCamelCase('foo-bar');

// RegExp.exec
function regExpExec(uaString) {
  var uaString = 'com.sankuai.moviepro/Android/2.0.1';
  var platformReg = /com.sankuai.moviepro\/(\w+)\/([\w\.]+)/i;
  var platform = platformReg.exec(uaString);
  var version = platform && platform[2] ? platform[2] : '';
  console.log(platform);
}
regExpExec();

function stringMatch() {
  var uaString = 'com.sankuai.moviepro/Android/2.0.1';
  var platformReg = /com.sankuai.moviepro\/(\w+)\/([\w\.]+)/i;
  var platform = uaString.match(platformReg);
  console.log(platform);
}

function stringReplace() {
  var uaString = 'com.sankuai.moviepro/Android/2.0.1';
  var platformReg = /com.sankuai.moviepro\/(\w+)\/([\w\.]+)/i;
  console.log(uaString.replace(platformReg, '$1-$2'));
  uaString.replace(platformReg, function(string, ...match) {
    console.log(string);
    console.log(match);
  });
}
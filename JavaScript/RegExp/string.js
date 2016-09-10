/**
 * replace 一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。
 *  第二个参数可以函数，穿给函数的参数：匹配到的字符串、匹配字符串在原字符串的位置、原字符串。
 * match 一个在字符串中执行查找匹配的String方法，它返回一个数组或者在未匹配到时返回null。
 *  match返回的是一个类数组，见function stringMatch
 * split 一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的String方法。
 */

function toCamelCase(string) {
  return string.replace(/-(.)/g, function replacer(string, p1) {
    var args =  Array.prototype.slice.call(arguments);
    console.log(args);
    return p1.toUpperCase();
  });
};
toCamelCase('foo-bar-ok');

function stringReplace() {
  var uaString = 'com.sankuai.moviepro/Android/2.0.1';
  var platformReg = /com.sankuai.moviepro\/(\w+)\/([\w\.]+)/i;
  console.log(uaString.replace(platformReg, '$1-$2'));
  uaString.replace(platformReg, function(string, ...match) {
    console.log(string);
    console.log(match);
  });
}

function stringMatch() {
  var uaString = 'com.sankuai.moviepro/Android/2.0.1';
  var platformReg = /com.sankuai.moviepro\/(\w+)\/([\w\.]+)/i;
  var platform = uaString.match(platformReg);
  console.log(typeof platform);
  console.log(platform);
  /**
   * the value of platform:
  [
    "com.sankuai.moviepro/Android/2.0.1", 
    "Android", 
    "2.0.1", 
    index: 0, 
    input: "com.sankuai.moviepro/Android/2.0.1"
  ]
  */
}

var colorText = 'red,blue,green,yellow';
colorText.split(/e+/);
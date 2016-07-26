var url = require('url');

var urlString = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';
var result = url.parse(urlString);
console.log(result);
console.log(url.format(result));

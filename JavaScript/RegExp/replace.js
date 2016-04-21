function toCamelCase(string) {
  return string.replace(/-(.)/g, function replacer(string, p1) {
    var args =  Array.prototype.slice.call(arguments);
    return p1.toUpperCase();
  });
};
toCamelCase('foo-bar');
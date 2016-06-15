function* outer() {
  yield 'begin';
  yield inner();
  yield 'end';
}
function* inner() {
  yield 'inner';
}
var it = outer(), v;
v = it.next().value;
console.log(v);            // -> 输出：begin
v = it.next().value;
console.log(v);            // -> 输出：{}
console.log(v.toString()); // -> 输出：[object Generator]
v = it.next().value;
console.log(v);            // -> 输出：end



function* outer() {
yield 'begin';
/*
 * 这行等价于 yield 'inner';就是把inner里面的代码替换过来
 * 同时获得的rt刚好就是inner的返回值
 */
var rt = yield* inner();
console.log(rt);  // -> 输出：return from inner
    yield 'end';
}
function* inner() {
yield 'inner';
return 'return from inner';
}
var it = outer(), v;
v = it.next().value;
console.log(v);            // -> 输出：begin
v = it.next().value;
console.log(v);            // -> 输出：inner
v = it.next().value;
console.log(v);            // -> 输出：end
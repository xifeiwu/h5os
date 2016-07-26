var arr = [1, 2, 3, 4, 5];
arr2 = arr.map((a) => {
  var value = a + 1;
  return function getvalue(){return 3};
});
console.log(arr2);
console.log(arr2[0]());

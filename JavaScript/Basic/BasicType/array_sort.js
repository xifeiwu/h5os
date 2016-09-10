var arr = [1,4,3,2,6,5];
arr.sort((a, b) => a - b);
console.log(arr);

for(var i = 0; i < arr.length; i++) {
  if (arr[i] == 4) {
    arr.splice(i, 1);
  }
  console.log(arr.length);
  console.log(i + ' -> ' + arr[i]);
}
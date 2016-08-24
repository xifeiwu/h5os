function whileLoop() {
  var cnt = 0;
  while(cnt++ < 100000) {
    console.log(cnt);
  }
}
console.log('in load_flow.js ...')
whileLoop();
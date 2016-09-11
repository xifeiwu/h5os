/**
 * this this of arrow function always stays the same as 
 * the this where it is defined. 
 */
var color = 'blue';
var getColor = () => {
  return this.color;
};

var goods = {
  color: 'red',
  getColor: getColor
};
goods.getColor();

1.the number of childNodes
//seven child nodes for ul
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

//no child node for div
<div></div>
//one child node for div
<div>
</div>

2. function declaration and function expression, 
and the relation between them and Immediately-Invoked Function Expression
form of IIFE
(function(exports){
	}
})(window);
Full Explanation
http://benalman.com/news/2010/11/immediately-invoked-function-expression/
http://dmitrysoshnikov.com/ecmascript/chapter-5-functions/#question-about-surrounding-parentheses
Abstraction:
aving all this, how should we tell the parser that what we really want it to call a function immediately after its creation? The answer is obvious. It’s should be a function expression, and not a function declaration.
The logical question now is why do we need this type of functions at all? The answer is obvious —  to use them in expressions and “not pollute” the variables object. 
DEMO1:
(function foo(x) {
  alert(x);
})(1)
vs.
function foo(x) {
  alert(x);
}(1)

DEMO2:
foo(); 
function foo() {
  alert('foo');
}
vs.
foo();
foo = function() {
  alert('foo');
}

DEMO3:
var foo = {};
(function initialize() {
  var x = 10;
  foo.bar = function () {
    alert(x);
  };
})();
foo.bar(); // 10;
alert(x); // "x" is not defined

3.
operator of ``: the content between ` is is not need to escape.
//Example
  var test_dom = document.createElement("div");
  test_dom.id = "closure";
  test_dom.innerHTML =
  `
  <ul id="myList">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 3</a></li>
  </ul>
  `;
  document.body.appendChild(test_dom);

item = function() {
  var id = '5';
  var color = 'red';
  var name = 'me';

  var checked = 'true';
  var ariaSelected = 'localDisplayed';

  return `<li id="calendar-${id}" role="presentation">
      <div class="gaia-icon icon-calendar-dot" style="color:${color}"
           aria-hidden="true"></div>
      <label class="pack-checkbox" role="option" ${ariaSelected}>
        <input value="${id}" type="checkbox" ${checked}/>
        <span class="name" dir="auto">${name}</span>
      </label>
    </li>`;
}
4.
use of => (arrow function)
http://es6.ruanyifeng.com/#docs/function

5.
use of requirejs
http://requirejs.cn/

6.
Use of ShadowDom
Reference: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM
Example:
<html>
  <head></head>
  <body>
    <p id="hostElement"></p>
    <script>
      // Create shadow DOM
      var shadow = document.querySelector('#hostElement').createShadowRoot();
      // Add some text to shadow DOM
      shadow.innerHTML = '<p>Here is some new text</p>';
      // Add some CSS to make the text red
      shadow.innerHTML += '<style>p { color: red };</style>';
    </script>
  </body
</html>

7.
Firefox OS Building Blocks
https://developer.mozilla.org/en-US/Apps/Design/Firefox_OS_building_blocks
https://github.com/gaia-components

8.
gaia component study
https://wiki.mozilla.org/Gaia/Shared/Components
http://moduscreate.com/web-components-introduction/
http://www.html5rocks.com/zh/tutorials/webcomponents/customelements/

9.
Create Sub class of HTMLElement.
var XFoo = document.registerElement('x-foo', {
  prototype: Object.create(HTMLElement.prototype)
});

Three ways of creating HTML Element.

使用HTML标签
<x-foo></x-foo>

在 JS 中创建 DOM：
var xFoo = document.createElement('x-foo');
xFoo.addEventListener('click', function(e) {
  alert('Thanks!');
});

使用 new 操作符：
var xFoo = new XFoo();
document.body.appendChild(xFoo);

10.类继承与原型继承
类属性方法、静态属性方法。

11.bind, apply, call

12.正则表达式

13.AMD与COMMOJS
alameda.js

14.DOM

15.gaia`s requirejs
dynamic load of js and css.
Import HTML: through property of is and element.html`s name.

16.
CustomEvent
  var evt = new CustomEvent('h5os-date-changed', {
    detail: {
      toDate: newDate
    },
    bubbles: true,
    cancelable: false
  });
  document.dispatchEvent(evt);
  document.addEventListener('h5os-date-changed', function(e) {
    debug('h5os-date-changed, e.detail.toDate: ' + e.detail.toDate);
    var todate = e.detail.toDate;
    this.navSetup(MONTH_VIEW, '.month.active .focusable');
    this.setFocusOnMonthView(todate);
  }.bind(this));

17.
addEventListener and handleEvent

18.
indexDB

19.
appendChild and cloneNode
if element already is its childNode, appendChild will do nothing.

20.
Array and Object-lick Array
Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组

21.
keycode and keyValue in Professional JavaScript


22. Mutation Observer 

23. Object.keys
var obj = {
  name: 'hello',
  print: function() {
    console.log(this.name);
  }
}
console.log(Object.keys(obj));

16. history.pushState and window.onpopstate
window.onpopstate = function(event) {
  alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
};
//绑定事件处理函数. 
history.pushState({page: 1}, "title 1", "?page=1");    //添加并激活一个历史记录条目 http://example.com/example.html?page=1,条目索引为1
history.pushState({page: 2}, "title 2", "?page=2");    //添加并激活一个历史记录条目 http://example.com/example.html?page=2,条目索引为2
history.replaceState({page: 3}, "title 3", "?page=3"); //修改当前激活的历史记录条目 http://ex..?page=2 变为 http://ex..?page=3,条目索引为2
history.back(); // 弹出 "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // 弹出 "location: http://example.com/example.html, state: null
history.go(2);  // 弹出 "location: http://example.com/example.html?page=3, state: {"page":3}

17. set value of HTML component.
such as an option or select
if set optionNode.label = '3333'; then the dom node appears as below:
<option label="3333" value="2">ADJ</option>
if set optionNode.fullName = 'hello'; the property of fullName does not appear.
while if I use setAttribute then the property will appear in dom node.
The property set by setAttribute can not be accessed by []. such as, node.setAttribute('name', 'node'), then node.name is null.

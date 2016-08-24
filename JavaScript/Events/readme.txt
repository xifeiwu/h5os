Event change
The change event is fired for <input>, <select> and <textarea> elements when a change to the element's value is commited by the user. Unlike the input event, the change event is not necessarily fired for each change to an element's value.

The DOM input event is fired synchronously when the value of an <input> or <textarea> element is changed. Additionally, it fires on contenteditable editors when its contents are changed. In this case, the event target is the editing host element. If there are two or more elements which have contenteditable as true, "editing host" is the nearest ancestor element whose parent isn't editable. Similarly, it's also fired on root element of designMode editors.

The logic of event propagation.
addEventListener
target.addEventListener(type, listener[, useCapture]);
如果值为true， useCapture 表示用户希望发起捕获。 在发起捕获之后， 只要Dom子树下发生了该事件类型，都会先被派发到该注册监听器，然后再被派发到Dom子树中的注册监听器中。并且向上冒泡的事件不会触发那些发起捕获的事件监听器。进一步的解释可以查看 DOM Level 3 Events 文档。 请注意该参数并不是在所有的浏览器版本中都是可选的。如果没有指定， useCapture 默认为false 。


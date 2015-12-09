Event change
The change event is fired for <input>, <select> and <textarea> elements when a change to the element's value is commited by the user. Unlike the input event, the change event is not necessarily fired for each change to an element's value.

The DOM input event is fired synchronously when the value of an <input> or <textarea> element is changed. Additionally, it fires on contenteditable editors when its contents are changed. In this case, the event target is the editing host element. If there are two or more elements which have contenteditable as true, "editing host" is the nearest ancestor element whose parent isn't editable. Similarly, it's also fired on root element of designMode editors.

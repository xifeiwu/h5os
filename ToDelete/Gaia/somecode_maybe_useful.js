1.
在system dialog中使用<a>标签打开的网站没有browser的样子，有的网站打开是空白。 需要使用其他什么方法打开一个网站？
this.entrySheet = new EntrySheet(
  window.top.document.getElementById('screen'),
  // Prefix url with LRM character
  // This ensures truncation occurs correctly in an RTL document
  // We can remove this when bug 1154438 is fixed.
  '\u200E' + url,
  new BrowserFrame({
    url: url,
    oop: true
  })
);
this.entrySheet.open();
entry sheet好像畫在別份spec裡面, browser spec裡面找無


2.
contacts app的redirect url是什么呢？
zerg.acadine.com/app/contacts/redirect.html
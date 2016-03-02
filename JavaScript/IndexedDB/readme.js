The difference between add and put is same as in any API?
If you try to insert an element with key that already exist using the put function it will trigger and update of the existing element, however if you use the add function and element with same id exist you will get an error with the following message: "Key already exists in the object store."

# Two way of get data from database using index

  var transaction = connection.transaction(name, 'readwrite');
  var indexedStore = transaction.objectStore(name).index(indexName);
  // This is an encouraged way useing IDBKey
  var req = indexedStore.openCursor(window.IDBKeyRange.only(indexValue));
  req.onsuccess = function(event) {
    var cursor = event.target.result;
    if (cursor) {
      console.debug('cursor.value:', JSON.stringify(cursor.value));
      cursor.continue();
    }
  };
  req.onerror = function(evt) {
    console.log('getSelectedData request cursor error.');
  };
  // This is a way provided by Mozilla. Not encouraged.
  var req = indexedStore.mozGetAll(IDBKeyRange.only(indexValue));
  req.onsuccess = function(e) {
    console.log(e.target.result);
  };
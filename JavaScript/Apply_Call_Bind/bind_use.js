function dbListener(dbName, operation, id, model) {
	console.log(dbName + ' -> ' + operation + '. ' + id + ':' + model);
}

var addAccountListener = dbListener.bind(null, 'account', 'add');
var deleteAccountListener = dbListener.bind(null, 'account', 'delete');
var addCalendarListener = dbListener.bind(null, 'calendar', 'add');
var deleteCalendarListener = dbListener.bind(null, 'calendar', 'delete');

function test() {
	addAccountListener('home', 'google_home');
	deleteAccountListener('work', 'yahho_work');
	addCalendarListener('home', 'google_home');
	deleteCalendarListener ('work', 'yahho_work');
}

test();
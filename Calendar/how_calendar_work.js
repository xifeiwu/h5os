// MonthDay represents a single day inside the Month view grid.
The start point of js logic is js/main.js, which is a IIFE(Immediately-Invoked Function Expression).
The start point is not obvious, as main.js is compacted to bundle.js accordig to config file calendar.build.js.
The most important action in main.js is require(['app'], app => app.init());


js/view.js is base prototype for month.js, single_month.js.
month->single_month->month_day->day_observer

In month.js, GestureDetector is a very important variable for gesture detecte.
var GestureDetector = require('shared/gesture_detector/gesture_detector')

js/router.js is used for page route, some work is done by ext/page.js.

LazyLoader is defined in bundle.js?


# about h5os-page-changed
'h5os-page-changed' is fired only current page changed, such as change from /month/ to /day/
'h5os-page-changed' is emitted in two places:
function handleViews of router.js 
function _updateBaseDateAfterScroll of multi_day.js
'h5os-page-changed' is listened in NavigationMap.init() in file navigation_map.js

## navigation_map.js
# controls
variable controls is set in function navSetup. 
controls is an object used to store all elements in current view.
controls['month-view'] will refreshed in navSetup.
related code:
var containerId = 'month-view';
var query='.month.active .focusable';
var container = (containerId === undefined) ? document.body :
                document.getElementById(containerId);
var elements = container.querySelectorAll(query);
controls[containerId].elements = elements;

# currentContainerID
Function getIdByPath tells relation between currentContainerID, current page and Path_MAP
variable currentContainerID is one value of keys in Path_MAP
  var Path_MAP = {
    'month-view': ['/month/'],
    'day-view': ['/day/'],
    'week-view': ['/week/'],
    'modify-event-view': ['/event/edit/', '/event/add/'],
    'advanced-settings-view': ['/advanced-settings/'],
    'event-search-view': ['/search/'],
    'settings': ['/settings/'],
    'multi-events-view': ['/show-multi-events/'],
    'create-account-view': ['/select-preset/'],
    'modify-account-view': ['/create-account/', '/update-account/'],
    'switchto-date-view': ['/switchto-date/']
  };

# Event 'focusChanged'
focusChanged is fired in function handleKeydown in navigation_handler.js
setCurIndex -> sendIndexEvent -> 
CustomEvent 'index-changed' is fired, but no listener in current code.

# Event 'h5os-date-changed'
h5os-date-changed is fired in function _postMonthChanged of month.js
'h5os-date-changed' -> navSetup, setFocusOnMonthView -> setFocus


# two ways for focus setting
navigation_handler set in focus in handleKeydown, setCurIndex in 'focusChanged' callback
'h5os-date-changed' setFocusOnMonthView -> setFocus(do the focus) -> setCurIndex

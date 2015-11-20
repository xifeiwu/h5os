NO_NETWORK=1 make install-gaia APP=calendar

week.setAttribute('aria-selected', 'true');

navigation_map, navSetup
var containerId = 'month-view';
var query='.month.active .focusable';
var container = (containerId === undefined) ? document.body :
                document.getElementById(containerId);
var elements = container.querySelectorAll(query);

// Load of each view.
function snakeCase(name) {
  return name
    .replace(/^./, chr => chr.toLowerCase())
    .replace(/[A-Z]/g, chr => '_' + chr.toLowerCase());
};
name = 'Month';
var snake = snakeCase(name);
console.log('Will try to load view: '+ snake);
window.require([ 'views/' + snake ], (aView) => {
  console.log('Loaded view:' + aView);
  window.aView = aView;
  // Views[name] = aView;
  // return this.view(name, cb);
});

window.require([], (module) => {
  window.loadmodule = module;
});
window.require(['h5-option-menu'], (module) => {
  window.loadmodule = module;
});

// soft key related.
meta = document.head.querySelector('meta[name="soft-keys"]');
meta.content = 'lsk=Add event, dpe=View, rsk=Options';

// option menu related
document.querySelector('h5-option-menu');

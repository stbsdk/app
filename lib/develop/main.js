/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';

var app = require('../core');


// shims
require('stb-shim-bind');
require('stb-shim-classlist');
require('stb-shim-frame');

// public app instance
window.app = app;

// all development tools placeholder
app.develop = {};

// execution environment
// STB device or desktop browser
app.host = !!(window.gSTB || (window.parent && window.parent.gSTB));

// browser logging
window.debug = require('spa-app/lib/develop/debug');
// STB logging
//window.debug = app.host ? require('./debug') : require('spa-develop/debug');

// universal storage
//window.localStorage = window.localStorage || window.stbStorage;

// apply screen size, position, margins and styles
// app.setScreen(
//     app.metrics[localStorage.getItem('screen.height')] ||
//     app.metrics[screen.height] ||
//     app.metrics[720]
// );

// inherit SPA tools
require('spa-app/lib/develop/wamp');
require('spa-app/lib/develop/events');
require('spa-app/lib/develop/hooks');
require('spa-app/lib/develop/static');

// STB tools
if ( app.host ) {
    // web inspector
    require('./weinre');
}

//require('./proxy');
require('./events');

// the application itself
// "js" directory is resolved by webpack to
// path.join(process.env.PATH_ROOT, process.env.PATH_SRC, 'js')
//require('js/main');

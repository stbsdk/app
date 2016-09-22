/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var app    = require('spa-app/lib/core'),
    events = require('spa-app/lib/events');


// extract key codes
// for ( key in codes ) {
//     if ( key === 'volumeUp' || key === 'volumeDown' ) {
//         continue;
//     }
//     // no need to save key names
//     keyCodes[codes[key]] = true;
// }

// shims
require('stb-shim-classlist');

// apply geometry
require('./lib/metrics');

// load sdk+app css
require('./lib/css')('sdk');
require('./lib/css')('app');


// set max browser window size
window.moveTo(0, 0);
window.resizeTo(app.metrics.width, app.metrics.height);


// create stbEvent global object
window.stbEvent = require('./lib/events');


// new way of string handling
// all strings are in UTF-16
// since stbapp 2.18
if ( window.gSTB && gSTB.SetNativeStringMode ) {
    /* eslint new-cap: 0 */
    gSTB.SetNativeStringMode(true);
}


// activate development mechanisms and tools
if ( DEVELOP ) {
    require('./lib/develop/main');
}


// apply DOM events
Object.keys(events).forEach(function ( name ) {
    window.addEventListener(name, events[name]);
});


// public
module.exports = app;

/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var app      = require('./lib/core'),
    events   = require('spa-app/lib/events'),
    //router   = require('spa-router'),
    codes    = require('stb-rc').codes,
    //metrics  = require('../../src/js/metrics'),
    keyCodes = {},
    metrics, key, linkCSS;


// early return
//module.exports = app;


// inside frame/iframe
// if ( window.parent && window.parent.gSTB ) {
//     // link to the outer global objects
//     window.dvbManager         = window.parent.dvbManager;
//     window.epgManager         = window.parent.epgManager;
//     window.gSTB               = window.parent.gSTB;
//     window.pvrManager         = window.parent.pvrManager;
//     window.stbDownloadManager = window.parent.stbDownloadManager;
//     window.stbStorage         = window.parent.stbStorage;
//     window.stbUpdate          = window.parent.stbUpdate;
//     window.stbUPnP            = window.parent.stbUPnP;
//     window.stbWebWindow       = window.parent.stbWebWindow;
//     window.stbWindowMgr       = window.parent.stbWindowMgr;
//     window.timeShift          = window.parent.timeShift;
// }


// global application configuration
// in metrics.js file in js root
//metrics = require('app:metrics');


/**
 * True if executed on the STB device, set by debug module at runtime.
 *
 * @type {boolean}
 */
//app.host = true;


/**
 * Screen geometry and margins.
 *
 * @type {Object}
 * @property {number} height Total screen height
 * @property {number} width Total screen width
 * @property {number} availTop top safe zone margin
 * @property {number} availRight right safe zone margin
 * @property {number} availBottom bottom safe zone margin
 * @property {number} availLeft left safe zone margin
 * @property {number} availHeight safe zone height
 * @property {number} availWidth safe zone width
 */
//app.screen = null;


// /**
//  * Set crops, total, content size and link the corresponding CSS file.
//  *
//  * @param {Object} metrics screen params specific to resolution
//  *
//  * @return {boolean} operation status
//  */
// app.setScreen = function ( metrics ) {
//     if ( DEVELOP ) {
//         if ( arguments.length !== 1 ) { throw new Error(__filename + ': wrong arguments number'); }
//     }
//
//     if ( metrics ) {
//         if ( DEVELOP ) {
//             if ( typeof metrics !== 'object' ) { throw new Error(__filename + ': wrong metrics type'); }
//         }
//
//         // calculate and extend
//         metrics.availHeight = metrics.height - (metrics.availTop + metrics.availBottom);
//         metrics.availWidth  = metrics.width - (metrics.availLeft + metrics.availRight);
//
//         // set max browser window size
//         window.moveTo(0, 0);
//         window.resizeTo(metrics.width, metrics.height);
//
//         // already was initialized
//         if ( linkCSS && linkCSS instanceof HTMLLinkElement ) {
//             // remove all current CSS styles
//             document.head.removeChild(linkCSS);
//         }
//
//         // load CSS file base on resolution
//         linkCSS = document.createElement('link');
//         linkCSS.rel  = 'stylesheet';
//         linkCSS.href = 'css/' + (DEVELOP ? 'develop.' : 'release.') + metrics.height + '.css?' + +new Date();
//         document.head.appendChild(linkCSS);
//
//         // provide global access
//         app.metrics = metrics;
//
//         return true;
//     }
//
//     // nothing has applied
//     return false;
// };
//
//
// // apply screen size, position and margins
// app.setScreen(metrics[app.query.screenHeight] || metrics[screen.height] || metrics[720]);


// extract key codes
for ( key in codes ) {
    if ( key === 'volumeUp' || key === 'volumeDown' ) {
        continue;
    }
    // no need to save key names
    keyCodes[codes[key]] = true;
}


// create stbEvent global object
window.stbEvent = require('./lib/events');

//
//
// /**
//  * Device media events.
//  *
//  * @event module:stb/app#media
//  * @type object
//  * @property {number} code of event
//  */
//
//
// /**
//  * Event on messages from a window.
//  *
//  * @event module:stb/app#message
//  * @type object
//  * @property {boolean} broadcast message flag
//  * @property {string} message received from window
//  * @property {object} data received from window
//  */
//
//
// /**
//  * Fires stb device media events.
//  *
//  * @param {number} event code
//  * @param {string} info associated data in **JSON** format
//  */
// window.stbEvent.onEvent = function ( event, info ) {
//     // proxy to all frames
//     Array.prototype.forEach.call(window.frames, function ( frame ) {
//         // necessary global object is present
//         if ( frame.stbEvent && frame.stbEvent.onEvent ) {
//             // proxy call
//             frame.stbEvent.onEvent(event, info);
//         }
//     });
//
//     // there are some listeners
//     if ( app.events['media'] ) {
//         // additional data
//         if ( info ) {
//             try {
//                 info = JSON.parse(info);
//             } catch ( e ) {
//                 debug.log(e);
//             }
//         }
//
//         // notify listeners
//         app.emit('media', {code: parseInt(event, 10), info: info});
//     }
// };
//
//
// /**
//  * Fires event on broadcast messages from a window.
//  *
//  * @param {number} windowId that sent message
//  * @param {string} message text
//  * @param {object} data in sent message
//  * @fires module:/stb/app#message
//  */
// window.stbEvent.onBroadcastMessage = function ( windowId, message, data ) {
//     // proxy to all frames
//     Array.prototype.forEach.call(window.frames, function ( frame ) {
//         // necessary global object is present
//         if ( frame.stbEvent && frame.stbEvent.onBroadcastMessage ) {
//             // proxy call
//             frame.stbEvent.onBroadcastMessage(windowId, message, data);
//         }
//     });
//
//     if ( app.events['message'] ) {
//         // notify listeners
//         app.emit('message', {
//             broadcast: true,
//             windowId: windowId,
//             message: message,
//             data: data
//         });
//     }
// };
//
//
// /**
//  * Fires event on messages from a window.
//  *
//  * @param {number} windowId that sent message
//  * @param {string} message text
//  * @param {object} data in sent message
//  * @fires module:/stb/app#message
//  */
// window.stbEvent.onMessage = function ( windowId, message, data ) {
//     // proxy to all frames
//     Array.prototype.forEach.call(window.frames, function ( frame ) {
//         // necessary global object is present
//         if ( frame.stbEvent && frame.stbEvent.onMessage ) {
//             // proxy call
//             frame.stbEvent.onMessage(windowId, message, data);
//         }
//     });
//
//     if ( app.events['message'] ) {
//         // notify listeners
//         app.emit('message', {
//             broadcast: false,
//             windowId: windowId,
//             message: message,
//             data: data
//         });
//     }
// };
//
//
// /**
//  * Event on device mount state.
//  *
//  * @event module:stb/app#mount
//  * @type object
//  * @property {boolean} state of mount device
//  */
//
//
// /**
//  * Fires device mount state event.
//  *
//  * @param {boolean} state of mount device
//  * @fires module:/stb/app#mount
//  */
// window.stbEvent.onMount = function ( state ) {
//     // proxy to all frames
//     Array.prototype.forEach.call(window.frames, function ( frame ) {
//         // necessary global object is present
//         if ( frame.stbEvent && frame.stbEvent.onMount ) {
//             // proxy call
//             frame.stbEvent.onMount(state);
//         }
//     });
//
//     if ( app.events['device:mount'] ) {
//         // notify listeners
//         app.emit('device:mount', {state: state});
//     }
// };
//
//
// /**
//  * Event on callback on internet browser link clicked.
//  *
//  * @event module:stb/app#media:available
//  */
//
//
// /**
//  * Fires event of callback on internet browser link clicked to ask user what to do with link: play or download.
//  *
//  * @param {string} mime file type
//  * @param {string} url resource link
//  *
//  * @fires module:/stb/app#media:available
//  */
// window.stbEvent.onMediaAvailable = function ( mime, url ) {
//     // proxy to all frames
//     Array.prototype.forEach.call(window.frames, function ( frame ) {
//         // necessary global object is present
//         if ( frame.stbEvent && frame.stbEvent.onMediaAvailable ) {
//             // proxy call
//             frame.stbEvent.onMediaAvailable(mime, url);
//         }
//     });
//
//     if ( app.events['media:available'] ) {
//         // notify listeners
//         app.emit('media:available', {mime: mime, url: url});
//     }
// };
//
//
// /**
//  * Event on internet connection state.
//  *
//  * @event module:stb/app#internet:state
//  * @type object
//  * @property {boolean} state of internet connection
//  */
//
//
// /**
//  * Fires new internet connection state event.
//  *
//  * @param {boolean} state of internet connection
//  * @fires module:/stb/app#internet:state
//  */
// window.stbEvent.onNetworkStateChange = function ( state ) {
//     if ( app.events['internet:state'] ) {
//         // notify listeners
//         app.emit('internet:state', {state: state});
//     }
// };
//
//
// /**
//  * Event on document loading progress changes.
//  *
//  * @event module:stb/app#browser:progress
//  * @type object
//  * @property {number} progress of document loading
//  */
//
//
// /**
//  * Fires document loading progress changes event.
//  *
//  * @param {number} progress of document loading
//  * fires module:/stb/app#browser:progress
//  */
// window.stbEvent.onWebBrowserProgress = function ( progress ) {
//     // proxy to all frames
//     Array.prototype.forEach.call(window.frames, function ( frame ) {
//         // necessary global object is present
//         if ( frame.stbEvent && frame.stbEvent.onWebBrowserProgress ) {
//             // proxy call
//             frame.stbEvent.onWebBrowserProgress(progress);
//         }
//     });
//
//     if ( app.events['browser:progress'] ) {
//         // notify listeners
//         app.emit('browser:progress', {progress: progress});
//     }
// };
//
//
// /**
//  * Event on browser web window activation event.
//  *
//  * @event module:stb/app#window:focus
//  */
//
//
// /**
//  * Fires browser web window activation event.
//  *
//  * fires module:/stb/app#window:focus
//  */
// window.stbEvent.onWindowActivated = function () {
//     // proxy to all frames
//     Array.prototype.forEach.call(window.frames, function ( frame ) {
//         // necessary global object is present
//         if ( frame.stbEvent && frame.stbEvent.onWindowActivated ) {
//             // proxy call
//             frame.stbEvent.onWindowActivated();
//         }
//     });
//
//     if ( app.events['window:focus'] ) {
//         // notify listeners
//         app.emit('window:focus');
//     }
// };


// new way of string handling
// all strings are in UTF-16
// since stbapp 2.18
if ( window.gSTB && gSTB.SetNativeStringMode ) {
    /* eslint new-cap: 0 */
    gSTB.SetNativeStringMode(true);
}


// activate development mechanisms and tools
if ( DEVELOP ) {
    //require('stb-develop');
    require('./lib/develop/main');
}


// apply DOM events
Object.keys(events).forEach(function ( name ) {
    window.addEventListener(name, events[name]);
});


// public
module.exports = app;

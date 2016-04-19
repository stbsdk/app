/**
 * Additional dev events.
 *
 * @module stb/develop/events
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

/* eslint new-cap: 0 */

var util    = require('util'),
    app     = require('../core'),
    stringify = require('cjs-query').stringify,
    //request = require('spa-request'),
    //dom     = require('spa-dom'),
    grid    = require('./grid'),
    events  = {};


/**
 * Apply the given screen geometry and reload the page.
 *
 * @param {number} width screen param
 * @param {number} height screen param
 */
function changeScreenDimension ( width, height ) {
    app.query.screenHeight = height;
    location.search = '?' + stringify(app.query);

    // check if it's necessary
    /*if ( Number(localStorage.getItem('screen.height')) === height ) {
        // not really
        debug.log('no resolution change: new and current values are identical', 'red');
    } else {
        // yes
        debug.log(util.format('switch to %sx%s', width, height), 'red');

        // save in case of document reload
        localStorage.setItem('screen.height', height);
        localStorage.setItem('screen.width',  width);

        // hide content to avoid raw HTML blinking
        document.body.style.display = 'none';

        // apply new metrics
        app.setScreen(require('app:metrics')[height]);

        // restore visibility
        document.body.style.display = '';
    }*/
}


// inherit SPA tools
//require('spa-develop/events');


events.load = function () {
    // export to globals div for develop HTML elements
    //window.$develop = document.body.appendChild(document.createElement('div'));
   // window.$develop.className = 'develop';

    // apply dev css
    //document.body.classList.add('develop');

    grid.init();

    if ( localStorage.getItem('grid.active') === 'true' ) {
        grid.show();
    }

    // stress-testing
    //window.gremlins = require('gremlins.js/gremlins.min.js');
    //window.horde    = window.gremlins.createHorde();
};


events.keydown = function ( event ) {
    switch ( event.keyCode ) {
        //// numpad 0
        //case 96:
        //    debug.log('full document reload', 'red');
        //    location.hash = '';
        //    location.reload();
        //    break;

        // numpad 1
        case 97:
            // NTSC
            changeScreenDimension(720, 480);
            break;

        // numpad 2
        case 98:
            // PAL
            changeScreenDimension(720, 576);
            break;

        // numpad 3
        case 99:
            // 720p
            changeScreenDimension(1280, 720);
            break;

        // numpad 4
        case 100:
            // 1080p
            changeScreenDimension(1920, 1080);
            break;

        // numpad 5
        case 101:
            // debug grid
            if ( grid.active ) {
                grid.hide();
            } else {
                grid.show();
            }
            debug.log('show grid: ' + grid.active, 'red');
            localStorage.setItem('grid.active', grid.active.toString());
            break;

        // numpad 6
        //case 102:
        //    // stress-testing for emulation
        //    window.horde.unleash({nb: 500});
        //    break;

        // numpad 7
        //case 103:
        //    if ( !app.data.host ) {
        //        debug.log('SpyJS in this mode is available only on STB devices.', 'red');
        //    } else {
        //        // SpyJS enable/disable
        //        if ( !localStorage.getItem('spyjs.active') ) {
        //            // try to "ping" proxy server
        //            request.ajax(document.location.protocol + '//' + location.hostname + ':3546', {
        //                method: 'get',
        //                onload: function () {
        //                    // proxy seems ready
        //                    //isSpyJs = true;
        //                    localStorage.setItem('spyjs.active', true);
        //                    debug.log('SpyJS: enable', 'red');
        //                    debug.log('SpyJS: set proxy to ' + location.hostname + ':' + 3546);
		//
        //                    gSTB.SetWebProxy(location.hostname, 3546, '', '', '');
        //                    location.reload();
        //                },
        //                onerror: function () {
        //                    debug.log('SpyJS: no connection (check SpyJS is started on the server)', 'red');
        //                }
        //            });
        //        } else {
        //            //isSpyJs = false;
        //            localStorage.setItem('spyjs.active', false);
        //            gSTB.ResetWebProxy();
        //            debug.log('SpyJS: disable', 'red');
        //            location.reload();
        //        }
        //    }
        //    break;

        // numpad 8
        //case 104:
        //    // FireBug Lite
        //    debug.log('firebug-lite activation', 'red');
        //    document.head.appendChild(dom.tag('script', {
        //        type: 'text/javascript',
        //        src: 'http://getfirebug.com/firebug-lite.js#startOpened',
        //        onload: function () {
        //            debug.log('firebug-lite ready ...', 'green');
        //        },
        //        onerror: function ( error ) {
        //            debug.inspect(error);
        //        }
        //    }));
        //    break;

        // numpad 9
        //case 105:
        //    // outline components and inner structures
        //    debug.log('toggle develop css layout', 'red');
        //    document.body.classList.toggle('develop');
        //    break;

        // numpad .
        //case 110:
        //    // CSS reload
        //    debug.log('CSS reload', 'red');
        //    // get through all css links
        //    Array.prototype.slice.call(document.head.getElementsByTagName('link')).forEach(function forEachLink ( tag ) {
        //        // get base name, modify and apply
        //        tag.href = tag.href.split('?')[0] + '?' + (+new Date());
        //    });
        //    break;
    }
};


// additional top-level key handlers
window.addEventListener('load',    events.load);
window.addEventListener('keydown', events.keydown);


// public
module.exports = events;

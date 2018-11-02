/**
 * Web Inspector Remote.
 *
 * @module stb/develop/weinre
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var app     = require('spa-app/lib/core'),
    tag     = require('spa-dom').tag,
    //storage = require('./storage'),
    util    = require('util'),
    //config  = {}/*require('../../config/weinre')*/,
    gSTB    = window.gSTB || window.top.gSTB,
    vars    = {},
    debug, debugName, debugServer;


// web inspector is allowed only without SpyJS
if ( !app.develop.storage.getItem('spyjs.active') ) {
    if ( gSTB ) {
        vars = JSON.parse(gSTB.GetEnv(JSON.stringify({varList:['debug', 'debug_name', 'debug_server']})));

        if ( !vars.errMsg && vars.result ) {
            vars = vars.result;
        }
    }

    debug = vars.debug || app.develop.storage.getItem('debug');
    debugName = vars.debug_name || app.develop.storage.getItem('debug_name');
    debugServer = vars.debug_server || app.develop.storage.getItem('debug_server');

    if ( debug && (debug === '1' || debug === 'yes' || debug === 'on') ) {
        // load external script
        document.head.appendChild(tag('script', {
            type: 'text/javascript',
            src: util.format('http://%s:%s/target/target-script-min.js#%s', debugServer, 8000, debugName)
        }));
    }
}

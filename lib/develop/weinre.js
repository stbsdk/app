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
    config  = {} /*require('../../config/weinre')*/;


// web inspector is allowed only without SpyJS
if ( config.active && !app.develop.storage.getItem('spyjs.active') ) {
    // load external script
    document.head.appendChild(tag('script', {
        type: 'text/javascript',
        src: util.format('//%s:%s/target/target-script-min.js#%s', location.hostname, config.port, config.name)
    }));
}

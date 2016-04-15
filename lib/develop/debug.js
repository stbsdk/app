/**
 * Logger.
 *
 * @module stb/develop/debug
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

/* eslint new-cap: 0 */
/* global gSTB:false */

var //host   = require('../app').data.host,
    //config = require('../../../../config/logger'),
    util  = require('util'),
    debug = require('spa-develop/debug');


/**
 * Check condition and warn if not match.
 *
 * @param {boolean} condition should be true if okay
 * @param {string} title description of the problem
 */
debug.assert = function ( condition, title ) {
    if ( !condition ) {
        gSTB.Debug(('Assertion failed: ' + title));
    }
};


/**
 * Print a plain colored string.
 *
 * @param {*} message data to output
 * @param {string} [color='black'] colour to set
 */
debug.log = function ( message, color ) {
    message = (message + '') || '(empty message)';

    gSTB.Debug(message[color || 'white']);
};


/**
 * Print the given var with caption.
 *
 * @param {*} data data to output
 * @param {string} [title] optional caption
 */
debug.info = function ( data, title ) {
    var type = Object.prototype.toString.call(data).match(/\s([a-zA-Z]+)/)[1].toLowerCase();

    // prepare
    if ( data instanceof Object || Array.isArray(data) ) {
        // complex object
        data = data.nodeName ? data.outerHTML : JSON.stringify(data, null, 4);
    }
    // combine all together and print result
    gSTB.Debug((type === 'error' ? type : type) + '\t' + (title ? title + ':\t' : '') + data);
};


/**
 * Print the given complex var with level restriction.
 *
 * @param {*} data data to output
 * @param {number} [depth=0] amount of sub-levels to print
 */
debug.inspect = function ( data, depth ) {
    gSTB.Debug('inspect:\n' + util.inspect(data, {depth: depth === undefined ? 3 : depth, colors: true}));
};


/**
 * Print the given event object in some special way.
 *
 * @param {Event} data event object
 */
debug.event = function ( data ) {
    var type  = data.type.toUpperCase(),
        color = type === 'ERROR' ? 'red' : 'green',
        text  = ('Event ' + type[color]);

    switch ( type ) {
        case 'KEYDOWN':
            text = text +
                '\tctrl'[data.ctrlKey  ? 'green' : 'grey'] +
                ' alt'[data.altKey   ? 'green' : 'grey'] +
                ' shift'[data.shiftKey ? 'green' : 'grey'] +
                '\t' + data.keyCode + '\t' + data.code + '\t' + (data.keyIdentifier || '');
            break;
        case 'KEYPRESS':
            text = text +
                '\tctrl'[data.ctrlKey  ? 'green' : 'grey'] +
                ' alt'[data.altKey   ? 'green' : 'grey'] +
                ' shift'[data.shiftKey ? 'green' : 'grey'] +
                '\t' + data.keyCode + '\t' + (data.keyIdentifier || '') + '\t' + String.fromCharCode(data.keyCode);
            break;
        case 'MOUSEMOVE':
            text = text +
                '\tctrl'[data.ctrlKey  ? 'green' : 'grey'] +
                ' alt'[data.altKey   ? 'green' : 'grey'] +
                ' shift'[data.shiftKey ? 'green' : 'grey'] +
                '\t' + data.x + ':' + data.y;
            break;
        case 'CLICK':
            text = text +
                '\tctrl'[data.ctrlKey  ? 'green' : 'grey'] +
                ' alt'[data.altKey   ? 'green' : 'grey'] +
                ' shift'[data.shiftKey ? 'green' : 'grey'] +
                '\t' + data.x + ':' + data.y;
            break;
        case 'ERROR':
            text = text +
                '\t' + data.filename +
                ' (' + data.lineno + ':' + data.colno + ')' +
                ' ' + data.message;
            break;
    }
    gSTB.Debug(text);
};


// public
module.exports = debug;

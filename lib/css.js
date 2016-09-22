/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var app = require('spa-app/lib/core');
    //metrics = require('app:metrics'),
    //linkCSS;


// global link
//app.metrics = metrics[app.query.screenHeight] || metrics[screen.height] || metrics[720];

// calculate and extend
//app.metrics.availHeight = app.metrics.height - (app.metrics.availTop  + app.metrics.availBottom);
//app.metrics.availWidth  = app.metrics.width  - (app.metrics.availLeft + app.metrics.availRight);

// // set max browser window size
// window.moveTo(0, 0);
// window.resizeTo(metrics.width, metrics.height);

// load CSS file base on resolution
/*linkCSS = document.createElement('link');
linkCSS.rel  = 'stylesheet';
linkCSS.href = 'css/' + (DEVELOP ? 'develop.' : 'release.') + app.metrics.height + '.css' + (DEVELOP ? '?' + Date.now() : '');
document.head.appendChild(linkCSS);*/


// public
module.exports = function ( name ) {
    var link = document.createElement('link');

    link.rel  = 'stylesheet';
    link.href = 'css/' + (DEVELOP ? 'develop.' : 'release.') + name + '.' + app.metrics.height + '.css' + (DEVELOP ? '?' + Date.now() : '');
    document.head.appendChild(link);
};

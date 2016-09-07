/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var app     = require('spa-app/lib/core'),
    metrics = require('app:metrics');


// global link
app.metrics = metrics[app.query.screenHeight] || metrics[screen.height] || metrics[720];

// calculate and extend
app.metrics.availHeight = app.metrics.height - (app.metrics.availTop  + app.metrics.availBottom);
app.metrics.availWidth  = app.metrics.width  - (app.metrics.availLeft + app.metrics.availRight);


// public
//module.exports = app;

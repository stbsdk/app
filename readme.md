Application core
================

[![Build Status](https://img.shields.io/travis/stbsdk/app.svg?style=flat-square)](https://travis-ci.org/stbsdk/app)
[![NPM version](https://img.shields.io/npm/v/stb-app.svg?style=flat-square)](https://www.npmjs.com/package/stb-app)
[![Dependencies Status](https://img.shields.io/david/stbsdk/app.svg?style=flat-square)](https://david-dm.org/stbsdk/app)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/stbsdk)


Main module to create STB application.
Extends SPA [app](https://github.com/spasdk/app) module.
Adds STB-specific logic (handle screen resolution, STB events, work inside iframe, etc.).


## Installation ##

```bash
npm install stb-app
```


## Usage ##

Add the instance to the scope:

```js
var app = require('stb-app');
```

At run-time adds the following attributes:

 Name               | Description
--------------------|-------------
 app.data.host      | True if executed on the STB device, set by debug module at runtime.
 app.data.screen    | Screen geometry and margins.


## Development mode ##

> There is a global var `DEVELOP` which activates additional consistency checks and protection logic not available in release mode.


## Contribution ##

If you have any problem or suggestion please open an issue [here](https://github.com/stbsdk/app/issues).
Pull requests are welcomed with respect to the [JavaScript Code Style](https://github.com/DarkPark/jscs).


## License ##

`stb-app` is released under the [MIT License](license.md).

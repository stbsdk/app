STB SDK application core
========================

[![NPM version](https://img.shields.io/npm/v/stb-app.svg?style=flat-square)](https://www.npmjs.com/package/stb-app)
[![Dependencies Status](https://img.shields.io/david/stbsdk/app.svg?style=flat-square)](https://david-dm.org/stbsdk/app)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/stb)


Main module to create STB SDK application. It's an instance of [Model](https://github.com/stbsdk/model) component.
Contains common data used by other modules, handles global events and screen resolution.
Can be used as a common events bus.


## Installation

```bash
npm install stb-app
```


## Usage

Add the instance to the scope:

```js
var app = require('stb-app');
```

At run-time has the following attributes:

 Name            | Description
-----------------|-------------
 app.data.debug  | Enable logging and debugging flag set by debug module
 app.data.host   | True if executed on the STB device, set by debug module at runtime.
 app.data.screen | Screen geometry and margins.
 app.data.time   | Different timestamps marks.



## Debug mode

> There is a global var `DEBUG` which activates additional consistency checks and protection logic not available in release mode.

In debug mode the constructor is exposed to the global namespace as `window.app`.


## Contribution

If you have any problem or suggestion please open an issue [here](https://github.com/stbsdk/app/issues).
Pull requests are welcomed with respect to the [JavaScript Code Style](https://github.com/DarkPark/jscs).


## License

`stb-app` is released under the [GPL-3.0 License](http://opensource.org/licenses/GPL-3.0).

/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var app = require('./core');


/**
 * Device media events.
 *
 * @event module:stb/app#media
 * @type object
 * @property {number} code of event
 */


/**
 * Event on messages from a window.
 *
 * @event module:stb/app#message
 * @type object
 * @property {boolean} broadcast message flag
 * @property {string} message received from window
 * @property {object} data received from window
 */


// public
module.exports = {
    /**
     * The player reached the end of the media content or detected a discontinuity of the stream.
     */
    EVENT_END_OF_FILE: 1,

    /**
     * Information on audio and video tracks of the media content is received. It's now possible to call gSTB.GetAudioPIDs etc.
     */
    EVENT_GET_MEDIA_INFO: 2,
    
    /**
     * Video and/or audio playback has begun.
     */
    EVENT_PLAYBACK_BEGIN: 4,
    
    /**
     * Error when opening the content: content not found on the server or connection with the server was rejected
     */
    EVENT_CONTENT_ERROR: 5,
    
    /**
     * Detected DualMono AC-3 sound
     */
    EVENT_DUAL_MONO_DETECT: 6,
    
    /**
     * The decoder has received info about the content and started to play. It's now possible to call gSTB.GetVideoInfo
     */
    EVENT_INFO_GET: 7,
    
    /**
     * Error occurred while loading external subtitles
     */
    EVENT_SUBTITLE_LOAD_ERROR: 8,
    
    /**
     * Found new teletext subtitles in stream
     */
    EVENT_SUBTITLE_FIND: 9,
    
    /**
     * HDMI device has been connected
     */
    EVENT_HDMI_CONNECT: 32,
    
    /**
     * HDMI device has been disconnected
     */
    EVENT_HDMI_DISCONNECT: 33,
    
    /**
     * Recording task has been finished successfully. See appendix 13. JavaScript API for PVR subsystem
     */
    EVENT_RECORD_FINISH_SUCCESSFUL: 34,
    
    /**
     * Recording task has been finished with error. See appendix 13. JavaScript API for PVR subsystem
     */
    EVENT_RECORD_FINISH_ERROR: 35,
    
    /**
     * Scanning DVB Channel in progress
     */
    EVENT_DVB_SCANING: 40,
    
    /**
     * Scanning DVB Channel found
     */
    EVENT_DVB_FOUND: 41,
    
    /**
     * DVB Channel EPG update
     */
    EVENT_DVB_CHANNEL_EPG_UPDATE: 42,
    
    /**
     * DVB antenna power off
     */
    EVENT_DVB_ANTENNA_OFF: 43,


    /**
     * Fires stb device media events.
     *
     * @param {number} event code
     * @param {string} info associated data in **JSON** format
     */
    onEvent: function ( event, info ) {
        // proxy to all frames
        Array.prototype.forEach.call(window.frames, function ( frame ) {
            // necessary global object is present
            if ( frame.stbEvent && frame.stbEvent.onEvent ) {
                // proxy call
                frame.stbEvent.onEvent(event, info);
            }
        });

        // there are some listeners
        if ( app.events['media'] ) {
            // additional data
            if ( info ) {
                try {
                    info = JSON.parse(info);
                } catch ( e ) {
                    debug.log(e);
                }
            }

            // notify listeners
            app.emit('media', {code: parseInt(event, 10), info: info});
        }
    },


    /**
     * Fires event on broadcast messages from a window.
     *
     * @param {number} windowId that sent message
     * @param {string} message text
     * @param {object} data in sent message
     * @fires module:/stb/app#message
     */
    onBroadcastMessage: function ( windowId, message, data ) {
        // proxy to all frames
        Array.prototype.forEach.call(window.frames, function ( frame ) {
            // necessary global object is present
            if ( frame.stbEvent && frame.stbEvent.onBroadcastMessage ) {
                // proxy call
                frame.stbEvent.onBroadcastMessage(windowId, message, data);
            }
        });

        if ( app.events['message'] ) {
            // notify listeners
            app.emit('message', {
                broadcast: true,
                windowId: windowId,
                message: message,
                data: data
            });
        }
    },


    /**
     * Fires event on messages from a window.
     *
     * @param {number} windowId that sent message
     * @param {string} message text
     * @param {object} data in sent message
     * @fires module:/stb/app#message
     */
    onMessage: function ( windowId, message, data ) {
        // proxy to all frames
        Array.prototype.forEach.call(window.frames, function ( frame ) {
            // necessary global object is present
            if ( frame.stbEvent && frame.stbEvent.onMessage ) {
                // proxy call
                frame.stbEvent.onMessage(windowId, message, data);
            }
        });

        if ( app.events['message'] ) {
            // notify listeners
            app.emit('message', {
                broadcast: false,
                windowId: windowId,
                message: message,
                data: data
            });
        }
    },


    /**
     * Event on device mount state.
     *
     * @event module:stb/app#mount
     * @type object
     * @property {boolean} state of mount device
     */


    /**
     * Fires device mount state event.
     *
     * @param {boolean} state of mount device
     * @fires module:/stb/app#mount
     */
    onMount: function ( state ) {
        // proxy to all frames
        Array.prototype.forEach.call(window.frames, function ( frame ) {
            // necessary global object is present
            if ( frame.stbEvent && frame.stbEvent.onMount ) {
                // proxy call
                frame.stbEvent.onMount(state);
            }
        });

        if ( app.events['device:mount'] ) {
            // notify listeners
            app.emit('device:mount', {state: state});
        }
    },


    /**
     * Event on callback on internet browser link clicked.
     *
     * @event module:stb/app#media:available
     */


    /**
     * Fires event of callback on internet browser link clicked to ask user what to do with link: play or download.
     *
     * @param {string} mime file type
     * @param {string} url resource link
     *
     * @fires module:/stb/app#media:available
     */
    onMediaAvailable: function ( mime, url ) {
        // proxy to all frames
        Array.prototype.forEach.call(window.frames, function ( frame ) {
            // necessary global object is present
            if ( frame.stbEvent && frame.stbEvent.onMediaAvailable ) {
                // proxy call
                frame.stbEvent.onMediaAvailable(mime, url);
            }
        });

        if ( app.events['media:available'] ) {
            // notify listeners
            app.emit('media:available', {mime: mime, url: url});
        }
    },


    /**
     * Event on internet connection state.
     *
     * @event module:stb/app#internet:state
     * @type object
     * @property {boolean} state of internet connection
     */


    /**
     * Fires new internet connection state event.
     *
     * @param {boolean} state of internet connection
     * @fires module:/stb/app#internet:state
     */
    onNetworkStateChange: function ( state ) {
        if ( app.events['internet:state'] ) {
            // notify listeners
            app.emit('internet:state', {state: state});
        }
    },


    /**
     * Event on document loading progress changes.
     *
     * @event module:stb/app#browser:progress
     * @type object
     * @property {number} progress of document loading
     */


    /**
     * Fires document loading progress changes event.
     *
     * @param {number} progress of document loading
     * fires module:/stb/app#browser:progress
     */
    onWebBrowserProgress: function ( progress ) {
        // proxy to all frames
        Array.prototype.forEach.call(window.frames, function ( frame ) {
            // necessary global object is present
            if ( frame.stbEvent && frame.stbEvent.onWebBrowserProgress ) {
                // proxy call
                frame.stbEvent.onWebBrowserProgress(progress);
            }
        });

        if ( app.events['browser:progress'] ) {
            // notify listeners
            app.emit('browser:progress', {progress: progress});
        }
    },


    /**
     * Event on browser web window activation event.
     *
     * @event module:stb/app#window:focus
     */


    /**
     * Fires browser web window activation event.
     *
     * fires module:/stb/app#window:focus
     */
    onWindowActivated: function () {
        // proxy to all frames
        Array.prototype.forEach.call(window.frames, function ( frame ) {
            // necessary global object is present
            if ( frame.stbEvent && frame.stbEvent.onWindowActivated ) {
                // proxy call
                frame.stbEvent.onWindowActivated();
            }
        });

        if ( app.events['window:focus'] ) {
            // notify listeners
            app.emit('window:focus');
        }
    }
};

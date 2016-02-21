/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var codes = {};


/**
 * The player reached the end of the media content or detected a discontinuity of the stream
 *
 * @const {number} EVENT_END_OF_FILE
 * @default 1
 */
codes.EVENT_END_OF_FILE = 1;

/**
 * Information on audio and video tracks of the media content is received. It's now possible to call gSTB.GetAudioPIDs etc.
 *
 * @const {number} EVENT_GET_MEDIA_INFO
 * @default 2
 */
codes.EVENT_GET_MEDIA_INFO = 2;

/**
 * Video and/or audio playback has begun
 *
 * @const {number} EVENT_PLAYBACK_BEGIN
 * @default 4
 */
codes.EVENT_PLAYBACK_BEGIN = 4;

/**
 * Error when opening the content: content not found on the server or connection with the server was rejected
 *
 * @const {number} EVENT_CONTENT_ERROR
 * @default 5
 */
codes.EVENT_CONTENT_ERROR = 5;

/**
 * Detected DualMono AC-3 sound
 *
 * @const {number} EVENT_DUAL_MONO_DETECT
 * @default 6
 */
codes.EVENT_DUAL_MONO_DETECT = 6;

/**
 * The decoder has received info about the content and started to play. It's now possible to call gSTB.GetVideoInfo
 *
 * @const {number} EVENT_INFO_GET
 * @default 7
 */
codes.EVENT_INFO_GET = 7;

/**
 * Error occurred while loading external subtitles
 *
 * @const {number} EVENT_SUBTITLE_LOAD_ERROR
 * @default 8
 */
codes.EVENT_SUBTITLE_LOAD_ERROR = 8;

/**
 * Found new teletext subtitles in stream
 *
 * @const {number} EVENT_SUBTITLE_FIND
 * @default 9
 */
codes.EVENT_SUBTITLE_FIND = 9;

/**
 * HDMI device has been connected
 *
 * @const {number} EVENT_HDMI_CONNECT
 * @default 32
 */
codes.EVENT_HDMI_CONNECT = 32;

/**
 * HDMI device has been disconnected
 *
 * @const {number} EVENT_HDMI_DISCONNECT
 * @default 33
 */
codes.EVENT_HDMI_DISCONNECT = 33;

/**
 * Recording task has been finished successfully. See appendix 13. JavaScript API for PVR subsystem
 *
 * @const {number} EVENT_RECORD_FINISH_SUCCESSFUL
 * @default 34
 */
codes.EVENT_RECORD_FINISH_SUCCESSFUL = 34;

/**
 * Recording task has been finished with error. See appendix 13. JavaScript API for PVR subsystem
 *
 * @const {number} EVENT_RECORD_FINISH_ERROR
 * @default 35
 */
codes.EVENT_RECORD_FINISH_ERROR = 35;

/**
 * Scanning DVB Channel in progress
 *
 * @const {number} EVENT_DVB_SCANNING
 * @default 40
 */
codes.EVENT_DVB_SCANING = 40;

/**
 * Scanning DVB Channel found
 *
 * @const {number} EVENT_DVB_FOUND
 * @default 41
 */
codes.EVENT_DVB_FOUND = 41;

/**
 * DVB Channel EPG update
 *
 * @const {number} EVENT_DVB_CHANNEL_EPG_UPDATE
 * @default 42
 */
codes.EVENT_DVB_CHANNEL_EPG_UPDATE = 42;

/**
 * DVB antenna power off
 *
 * @const {number} EVENT_DVB_ANTENNA_OFF
 * @default 43
 */
codes.EVENT_DVB_ANTENNA_OFF = 43;


// public
module.exports = codes;

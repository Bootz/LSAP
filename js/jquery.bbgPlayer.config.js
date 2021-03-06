/**
 * A configuration object that should be passed to the bbgPlayer during initialization.  
 * This allows for the external URLs and other constants to be defined easily. 
 * It also means that a different configuration can be passed to the same code file.
 */

define({
	embedPlayer: 'embed.php',
	popoutPlayer: null,
	metadataRemoteService: 'http://apps.innovation-series.com/streamreader/remote.streaminfo.php', //url to remote file that reads metadata - should be on same domain as it uses json
	configFolder: 'config/',
	styleFolder: 'css/',
	trackIncrement: 30, // number of seconds in between duration tracking calls
	trackEventCategory: 'Live Audio Streaming Player',
	jplayerSwfLocation: 'js' // should be relative to the web root and not contain a trailing slash
});
angular.module('video-player')

.component('videoPlayer', {
  bindings : {
    playback: "<"
  },
  templateUrl: 'src/templates/videoPlayer.html'
});

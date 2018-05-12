angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    playOnClick: '<',
    // playback: '<'
  },

  templateUrl: 'src/templates/videoList.html'
});

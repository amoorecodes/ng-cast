angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    playOnClick: '<',
    // currentVideo: '<'
  },

  templateUrl: 'src/templates/videoListEntry.html'
});

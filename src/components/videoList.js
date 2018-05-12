angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    playOnClick: '<',
    // playback: '<'
  },

  template: `
    <ul class="video-list">
      <video-list-entry 
        video='video'
        play-on-click="$ctrl.playOnClick"
        ng-repeat='video in $ctrl.videos track by $index'
      />
    </ul>
  ` 
});

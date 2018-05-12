angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    this.userInput = '';
    this.collection = exampleVideoData;
    this.playback = exampleVideoData[0];
    this.playOnClick = (video) => {
      console.log(video)
      this.playback = video;
      console.log(this)
    }
    this.updateSearch = (input, callback) => {
      console.log(this.userInput)
      youTube.search(input, (e) => (this.collection = e, this.playback = e[0]));
    }

   
  },
  
  template: `
    <div id="app container">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search 
          user-input="$ctrl.userInput"
          update-search='$ctrl.updateSearch'
          ng-model='$ctrl.userInput'
        />
      </div>
    </nav>
    <div class="row">
      <div class="col-md-7">
        <video-player 
          playback="$ctrl.playback"
        />
      </div>
      <div class="col-md-5">
        <video-list 
          videos='$ctrl.collection'
          play-on-click='$ctrl.playOnClick'
        />
      </div>
    <div>
  </div>

  `

});

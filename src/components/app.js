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

    this.updateSearch = (input) => {
      console.log(this.input)
      youTube.search(input, (data) => {
       this.collection = data.data.items;
       this.playback = data.data.items[0]; 
      });
    }

   
  },
  
  templateUrl: 'src/templates/app.html'

});

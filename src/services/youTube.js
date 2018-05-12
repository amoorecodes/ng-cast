angular.module('video-player')
.service('youTube', function($http){
  this.search=(input , callback) => {
   return $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      params: {
        key: YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable: 'true',
        maxResults: 5,
        part: 'snippet',
        q: input
      }
    }).then(function(response) {
        console.log('Success!');
        console.log(response);
        callback(response.data.items);
      }, function(error) {
        console.log('Unlucky!');
        console.log(error);
      });
    };
  });

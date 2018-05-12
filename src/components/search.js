angular.module('video-player')

.component('search', {
  bindings : {
    updateSearch : "<",
    userInput : "<"
  },
  templateUrl: '/src/templates/search.html'
});

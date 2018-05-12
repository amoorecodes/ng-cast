angular.module('video-player')

.component('search', {
  bindings : {
    updateSearch : "<",
    userInput : "<"
  },
  template: `
  <div class="search-bar form-inline">
  <input class="form-control" type="text" />
  <button
    ng-click='$ctrl.updateSearch($ctrl.userInput)' 
    class="btn">
    <span class="glyphicon glyphicon-search"></span>
  </button>
  </div>
  `
});

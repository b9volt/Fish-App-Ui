(function(){
  angular.module('FishBiApp')
  .service('userIdService', userIdService);

  function userIdService(){
    this.id = 1;

  } //end userIdService
})();

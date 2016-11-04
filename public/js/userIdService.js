(function(){
  angular.module('FishBiApp')
  .service('userIdService', userIdService);

  /**
   * userIdService does one thing: it passes the user ID from usersController to
   * tripsController.
   */



  function userIdService(){
    this.id = 2;

  } //end userIdService
})();

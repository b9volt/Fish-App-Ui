(function(){
  angular.module('FishBiApp')
  .service('userIdService', userIdService);

  /**
   * userIdService does one thing: it passes the user ID from usersController to
   * tripsController.
   */



  function userIdService(){

    this.id = 0;
    // var id = null;
    //
    // //http://stackoverflow.com/questions/18856153/how-can-i-pass-some-data-from-one-controller-to-another-peer-controller
    // return {
    //   getId: function () {
    //       return _id;
    //   },
    //   setId: function (value) {
    //       _id = value;
    //   }
    // };

  } //end userIdService
})();

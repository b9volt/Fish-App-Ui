(function(){
  angular.module('FishBiApp')
  .service('dataService', dataService);

  /**
   * dataService does one thing: it passes the user ID from usersController to
   * tripsController.
   */



  function dataService(){

    this.id = 0;

    if (this.id === 0) {
      this.tripData = [];
      this.showTrip = {};
      this.disableEdit = true;
    }
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

  } //end dataService
})();

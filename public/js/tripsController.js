(function() {
  angular.module('FishBiApp',[])
    .controller('TripsController', TripsController);

  function TripsController() {
    var self = this;

    this.favoriteColor = 'blue';
  } //end TripsController
})()

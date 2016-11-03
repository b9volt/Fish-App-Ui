(function() {
  angular.module('FishBiApp',[])
    .controller('TripsController', TripsController);

  function TripsController() {
    var self = this;

    this.tripData = null;

    this.getFishingTrips = function(){
      
    };

  } //end TripsController
})()

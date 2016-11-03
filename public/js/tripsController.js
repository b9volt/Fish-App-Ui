(function() {
  angular.module('FishBiApp')
    .controller('TripsController', TripsController);

  TripsController.$inject = ['$http', '$window', '$location'];

  function TripsController($http, $window, $location) {
    var self = this;

    this.tripData = null;

    this.getFishingTrips = function(){

    };

  } //end TripsController
})()

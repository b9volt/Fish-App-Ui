(function() {
  angular.module('FishBiApp')
    .controller('TripsController', TripsController);

  TripsController.$inject = ['$http', '$window', '$location'];

  function TripsController($http, $window, $location) {
    var self = this;
    var rootUrl = 'http://localhost:3000/users/1/trips'

    this.tripData = [];


    getFishingTrips = function(){
      $http.get(rootUrl)
        .then(function(response) {
          self.tripData = response.data.trip;
        })
        .catch(function(err) {
          console.log('err',err);
        });
    };


    getFishingTrips();

  } //end TripsController
})();

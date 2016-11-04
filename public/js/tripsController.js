(function() {
  angular.module('FishBiApp')
    .controller('TripsController', TripsController);

  TripsController.$inject = ['$http', '$window', '$location', 'chartService'];

  function TripsController($http, $window, $location, chartService) {
    var self = this;
    var rootUrl = 'http://localhost:3000/'

    this.tripData = [];
    this.test = chartService.foo("Brad and Tom are Cool!");

    getAllTrips = function(){
      $http.get(rootUrl + '/users/1/trips')
        .then(function(response) {
          self.tripData = response.data.trip;
        })
        .catch(function(err) {
          console.log('err',err);
        });
    };

    /*
    POST	/users/login
    POST	/users/logoff
    POST	/users

    GET	/users/:user_id/trips
    POST	/users/:user_id/trips
    GET	/users/:user_id/trips/:id
    PATCH	/users/:user_id/trips/:id
    DELETE	/users/:user_id/trips/:id
    */


    // getAllTrips();

  } //end TripsController
})();

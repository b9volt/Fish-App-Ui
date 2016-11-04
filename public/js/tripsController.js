(function() {
  angular.module('trips',['ui.router'])
    .controller('TripsController', TripsController);

  TripsController.$inject = ['$http', '$window', '$location', 'chartService', 'userIdService', '$state'];

  function TripsController($http, $window, $location, chartService, userIdService, $state) {
    var self = this;
    var rootUrl = 'http://localhost:3000/';

    this.tripData = [];
    this.test = chartService.foo("The Fish Team is Cool!");

    this.loggedInUserId = userIdService.id;

    getAllTrips = function(){
      $http.get(rootUrl + '/users/' + self.loggedInUserId + '/trips')
      //$http.get(rootUrl + '/users/1/trips')
        .then(function(response) {
          self.tripData = response.data.trip;
        })
        .catch(function(err) {
          console.log('err',err);
        });
    };

    this.createTrip = function() {
      console.log('Hello from this.createTrip');

      self.newTrip.user_id = self.loggedInUserId;

      $http.post(rootUrl + '/users/' + self.loggedInUserId + '/trips',
      { trip: self.newTrip }
      )
        .catch(function(err) {
          console.log('err',err);
        })
        .then(function(response) {
          $state.go('dashboard', {url: '/dashboard'});
        });

    }; //end this.createTrip

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


    getAllTrips();

  } //end TripsController
})();

(function() {
  angular.module('FishBiApp')
    .controller('TripsController', TripsController);

  TripsController.$inject = ['$http', '$window', '$location', 'chartService', 'userIdService'];

  function TripsController($http, $window, $location, chartService, userIdService) {
    var self = this;
    var rootUrl = 'http://localhost:3000/'

    this.tripData = [];
    this.test = chartService.foo("The Fish Team is Cool!");

    this.foo = userIdService.id;

    getAllTrips = function(){
      //$http.get(rootUrl + '/users/' + newService.id + '/trips')
      $http.get(rootUrl + '/users/1/trips')
        .then(function(response) {
          self.tripData = response.data.trip;
        })
        .catch(function(err) {
          console.log('err',err);
        });
    };

    this.createTrip = function() {
      console.log('Hello from this.createTrip');


       // {newLocation:"loc","num_of_fish":"3","clientsHappy":true,"rating":4,"summary":"sum","start":"2016","end":"2016"}

      var dataFromForm ={
        newLocation:"loc",
        num_of_fish:"3",
        clientsHappy:true,
        rating:4,
        summary:"sum",
        start:"2016-02-02",
        end:"2016-02-02"
      };

      var dataToSend = {trip: dataFromForm};

      $http.post(rootUrl + '/users/1/trips',
      {dataToSend}
      )
        .catch(function(err) {
          console.log('err',err);
        })
        .then(function(response) {
          $state.go('/dashboard');
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

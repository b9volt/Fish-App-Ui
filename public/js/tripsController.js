(function() {
  angular.module('trips',['ui.router'])
    .controller('TripsController', TripsController);

  TripsController.$inject = ['$http', '$window', '$location', 'chartService', 'dataService', '$state'];

  function TripsController($http, $window, $location, chartService, dataService, $state) {
    var self = this;
    var rootUrl = 'http://localhost:3000/';

    this.headerInfo = { headers: {
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    }};

    this.tripData = dataService.tripData;
    this.showTrip = dataService.showTrip;
    this.disableEdit = dataService.disableEdit;

    this.loggedInUserId = dataService.id;

    this.getAllTrips = function(){
      $http.get(rootUrl + '/users/' + self.loggedInUserId + '/trips', self.headerInfo)
        .then(function(response) {
          self.tripData = response.data.trip;
        })
        .catch(function(err) {
          console.log('err',err);
        });
    };

    this.createTrip = function() {

      self.newTrip.user_id = self.loggedInUserId;

      $http.post(rootUrl + '/users/' + self.loggedInUserId + '/trips',
      { trip: self.newTrip }, self.headerInfo
      )
        .catch(function(err) {
          console.log('err',err);
        })
        .then(function(response) {
          $state.go('dashboard', {url: '/dashboard'});
        });

    }; //end this.createTrip

    this.editTrip = function(trip) {
      console.log('trip is ', trip);
      self.showTrip = trip;
      console.log('self.showTrip is ', self.showTrip);
      self.saveDataToDataService();
      $state.go('editTrip', {url: '/editTrip'});
    };



    this.goToDashboard = function() {
      self.saveDataToDataService();
      $state.go('dashboard', {url: '/dashboard'});
    };

    this.saveDataToDataService = function() {
      dataService.tripData = self.tripData;
      dataService.showTrip = self.showTrip;
      dataService.disableEdit = self.disableEdit;
    };

    this.toggleEdit = function() {
      self.disableEdit = !self.disableEdit;
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

  } //end TripsController
})();

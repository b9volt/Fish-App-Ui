(function() {
  angular.module('trips',['ui.router'])
    .controller('TripsController', TripsController);

  TripsController.$inject = ['$http', '$window', '$location', 'dataService', '$state'];

  function TripsController($http, $window, $location, dataService, $state) {
    var self = this;
    var rootUrl = 'https://radiant-scrubland-61785.herokuapp.com/';

    this.headerInfo = { headers: {
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    }};

    //remember these values
    this.tripData = dataService.tripData;
    this.showTrip = dataService.showTrip;

    //every time a user changes state this should reset to true
    this.disableEdit = true;

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

    this.deleteTrip = function() {
      console.log('Hello from this.deleteTrip');

      $http.delete(rootUrl + '/users/' + self.loggedInUserId + '/trips/' + self.showTrip.id,
                  self.headerInfo
      )
        .catch(function(err) {
          console.log('err',err);
        })
        .then(function(response) {

          //in a future version, remove the trip from self.tripData
          //in this version, just make a request to the server
          self.getAllTrips();

          self.saveDataToDataService();
          $state.go('dashboard', {url: '/dashboard'});
        });
    }; //end this.deleteTrip

    this.editTrip = function() {
      console.log('Hello from this.editTrip');

      var dataToSend = {};
      //showTrip has data not on the Ruby whitelist so I have to do this the long way
      dataToSend.location = self.showTrip.location;
      dataToSend.num_of_fish = self.showTrip.num_of_fish;
      dataToSend.clientsHappy = self.showTrip.clientsHappy;
      dataToSend.rating = self.showTrip.rating;
      dataToSend.summary = self.showTrip.summary;
      dataToSend.start = self.showTrip.start;
      dataToSend.end = self.showTrip.end;
      dataToSend.weather = self.showTrip.weather;
      dataToSend.user_id = self.showTrip.user_id;

      $http.patch(rootUrl + '/users/' + self.loggedInUserId + '/trips/' + self.showTrip.id,
                  {trip: dataToSend}, self.headerInfo
      )
        .catch(function(err) {
          console.log('err',err);
        })
        .then(function(response) {

          //in a future version, remove the trip from self.tripData
          //in this version, just make a request to the server
          self.getAllTrips();

          self.saveDataToDataService();
          $state.go('dashboard', {url: '/dashboard'});
        });

    }; //end this.editTrip


    this.goToShowPage = function(trip) {
      self.showTrip = trip;
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

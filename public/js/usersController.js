(function() {
  angular.module('FishBiApp')
    .controller('UsersController', UsersController);

  UsersController.$inject = ['$http', '$window', '$location'];

  function UsersController($http, $window, $location) {

    var self = this;
    var rootUrl = 'http://localhost:3000/'

    this.test = 'Hello world from UsersController';

    this.signup = function() {
      console.log('Hello from users.signup -- fthis');
      console.log('data from the model is', self.signupUsername);

      $http.post(rootUrl + '/users',
        { user: {username: self.signupUsername, password: self.signupPassword }}
      )
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(err) {
        console.log('err',err);
      });

    }; //this.signup
  }
    /*
    POST	/users/login
    POST	/users/logoff
    POST	/users
    */
})();

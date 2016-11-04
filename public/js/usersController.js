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

        //clear the form
        this.signupUsername = '';
        this.signupPassword = '';
      })
      .catch(function(err) {
        console.log('err',err);
      });
    }; //this.signup

    this.login = function() {
      console.log('Hello from users.login -- fthis');
      console.log('data from the model is', self.loginUsername);

      $http.post(rootUrl + '/users/login',
        { user: {username: self.loginUsername, password: self.loginPassword }}
      )
      .then(function(response) {
        console.log(response.data);

        //$state.go.asdfasdfasfdasdfsdf

        //clear the form
        this.loginUsername = '';
        this.loginPassword = '';
      })
      .catch(function(err) {
        console.log('err',err);
      });
    }; //this.login
  }
    /*
    POST	/users/login
    POST	/users/logoff
    POST	/users
    */
})();

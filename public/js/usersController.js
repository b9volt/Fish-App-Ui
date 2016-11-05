(function() {
  angular.module('FishBiApp')
    .controller('UsersController', UsersController);

  UsersController.$inject = ['$http', '$state', '$stateParams','dataService'];

  function UsersController($http, $state, $stateParams, dataService)  {
    var self = this;
    var rootUrl = 'http://localhost:3000/';

    function login(userPass) {
      $http.post(`${rootUrl}users/login`, {user: {username: userPass.username, password: userPass.password}})
        .then(function(response) {
          self.user = response.data.user

          localStorage.setItem('token', JSON.stringify(response.data.token))
          console.log('self.user is: ', self.user);
          dataService.id = self.user.id;
          $state.go('dashboard', {url: '/dashboard'});
        })
        .catch((err) => {
          console.log(err);
        });
    }

    function signup(userPass) {
      $http.post(`${rootUrl}/users`, {user: {username: userPass.username, password: userPass.password }})
        .then(function(response) {
          console.log(response)

          $state.go('login', {url: '/'})
        })
        .catch((err) => {
          console.log(err);
        });
    }

    function logout(userPass) {
      // logout just deletes the token from localStorage
      localStorage.removeItem('token')

      $state.go('login', {url: '/'})
    }

    this.login = login;
    this.signup = signup;
    this.logout = logout;
  } //end UsersController
})();

(function() {
  angular.module('FishBiApp')
    .controller('UsersController', UsersController);

  UsersController.$inject = ['$http', '$state', '$stateParams','dataService'];

  function UsersController($http, $state, $stateParams, dataService)  {
    var self = this;
    var rootUrl = 'https://radiant-scrubland-61785.herokuapp.com/';

    function login(userPass) {
      $http.post(`${rootUrl}users/login`, {user: {username: userPass.username, password: userPass.password}})
        .then(function(response) {
          var user = response.data.user;

          localStorage.setItem('token', JSON.stringify(response.data.token))
          console.log('user is: ', user);
          dataService.id = user.id;
          dataService.userName = user.username;
          $state.go('dashboard', {url: '/dashboard'});
        })
        .catch((err) => {
          console.log(err);
        });
    }

    function signup(userPass) {
      $http.post(`${rootUrl}/signup`, {user: {username: userPass.username, password: userPass.password }})
        .then(function(response) {
          console.log(response)

          $state.go('login', {url: '/login'})
        })
        .catch((err) => {
          console.log(err);
        });
    }

    function logoff(userPass) {
      // logoff just deletes the token from localStorage
      localStorage.removeItem('token')

      $state.go('login', {url: '/'})
    }

    if (dataService.id) {

    }
    this.userName = dataService.userName;
    this.login = login;
    this.signup = signup;
    this.logoff = logoff;
  } //end UsersController
})();

(function() {
  angular.module('FishBiApp')
    .controller('UsersController', UsersController);

  UsersController.$inject = ['$http', '$window', '$location'];

  function UsersController($http, $window, $location) {

    this.test = 'Hello world from UsersController';
  }
    /*
    POST	/users/login
    POST	/users/logoff
    POST	/users
    */
})();

(function() {
  angular.module('FishBiApp',['ui.router'])
    .config(FishRouter);

  FishRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function FishRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
    // .state('login', {
    //   url: '/',
    //   templateUrl: '/partials/login.html'
    // })
    .state('dashboard', {
      url: '/',
      templateUrl: '/partials/dashboard.html'
    });

  }


// $locationProvider.html5Mode({
//   enabled: true,
//   requireBase: false
// });


})()

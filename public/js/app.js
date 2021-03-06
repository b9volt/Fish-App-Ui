(function() {
  //trips is included so it can change states
  angular.module('FishBiApp',['ui.router', 'trips'])
    .config(FishRouter);

  FishRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function FishRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('login', {
      url: '/',
      templateUrl: '/partials/login.html'
    })
    .state('createTrip', {
      url: '/createTrip',
      templateUrl: '/partials/trips/create.html'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: '/partials/dashboard.html'
    })
    .state('editTrip', {
      url: '/editTrip',
      templateUrl: '/partials/trips/edit.html'
    });

  }


// $locationProvider.html5Mode({
//   enabled: true,
//   requireBase: false
// });


})()

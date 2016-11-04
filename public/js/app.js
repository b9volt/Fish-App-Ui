(function() {
  angular.module('FishBiApp',['ui.router'])
    .config(FishRouter);

  FishRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function FishRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/createTrip");

    $stateProvider
    // .state('login', {
    //   url: '/',
    //   templateUrl: '/partials/login.html'
    // })
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

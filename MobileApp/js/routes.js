angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('cars', {
    url: '/page1',
    templateUrl: 'templates/cars.html',
    controller: 'carsCtrl'
  })

  .state('myTokens', {
    url: '/page2',
    templateUrl: 'templates/myTokens.html',
    controller: 'myTokensCtrl'
  })

  .state('insurance', {
    url: '/page3',
    templateUrl: 'templates/insurance.html',
    controller: 'insuranceCtrl'
  })

  .state('profile', {
    url: '/page4',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page7',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page8',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('transactionHistory', {
    url: '/page9',
    templateUrl: 'templates/transactionHistory.html',
    controller: 'transactionHistoryCtrl'
  })

  .state('blockchainHistory', {
    url: '/page10',
    templateUrl: 'templates/blockchainHistory.html',
    controller: 'blockchainHistoryCtrl'
  })

$urlRouterProvider.otherwise('')


});
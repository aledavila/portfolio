(function() {

  var app = angular.module('Portfolio', ['ui.router']);

  // configure different application states
  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/_homeView.html'
      }).state('about', {
        url: '/about',
        templateUrl: '/templates/_aboutView.html'
      }).state('projects', {
        url: '/projects',
        templateUrl: '/templates/_projectsView.html'
      }).state('resume', {
        url: '/resume',
        templateUrl: '/templates/_resumeView.html'
      });
  });
})();

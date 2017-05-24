var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', { templateUrl: 'partials/home.html', })
    .otherwise({ redirectTo: '/' });
  $locationProvider.html5Mode(true);
});

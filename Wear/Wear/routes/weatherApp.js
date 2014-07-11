var weatherApp = angular.module("weatherApp", []);

weatherApp.config(['$routeProvider',
  function ($routeProvider) {
     $routeProvider.
        when('/', {
          templateUrl: 'views/index.html',
          controller: 'CurrentCtrl',
          activetab: 'today'
        }).
        when('/tomorrow', {
          templateUrl: 'views/trains.html',
          controller: 'CurrentCtrl',
          activetab: 'tomorrow'
        }).
        when('/today/:location', {
          templateUrl: 'views/trains.html',
          controller: 'SearchedCtrl',
          activetab: 'trains'
        }).
        when('/tomorrow/:location', {
          templateUrl: 'views/trains.html',
          controller: 'SearchedCtrl',
          activetab: 'trains'
        }).
        otherwise({
          redirectTo: '/'
        });
  }]);


weatherApp.factory("GeolocationService", ['$q', '$window', '$rootScope', function ($q, $window, $rootScope) {
  return function () {
     //Credit to Rob Hurring: http://proccli.com/2013/10/angularjs-geolocation-service
     var deferred = $q.defer();

     if (!$window.navigator) {
        $rootScope.$apply(function () {
          deferred.reject(new Error("Geolocation is not supported"));
        });
     } else {
        $window.navigator.geolocation.getCurrentPosition(function (position) {
          $rootScope.$apply(function () {
             deferred.resolve(position);
          });
        }, function (error) {
          $rootScope.$apply(function () {
             deferred.reject(error);
          });
        });
     }

     return deferred.promise;
  }
}]);


//Create the MainCtrl Controller...
weatherApp.controller("MainCtrl", ['$scope', '$http', function ($scope, $http) {

  // ...

}]);
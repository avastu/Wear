var weatherApp = angular.module("weatherApp", []);

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
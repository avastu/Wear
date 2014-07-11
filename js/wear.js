var wear = angular.module("wear", ['ngRoute']);

wear.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/today', {
            /*templateUrl: 'views/stations.html',
            controller: 'StationsCtrl',*/
            activetab: 'today'
        }).
        when('/tomorrow', {
            /*templateUrl: 'views/trains.html',
            controller: 'TrainsCtrl',*/
            activetab: 'trains'
        }).
        otherwise({
            redirectTo: '/today'
        });
  }]);

//Create the MainCtrl Controller...
wear.controller("MainCtrl", ['$scope', '$http', '$route', function ($scope, $http, $route) {
    $scope.$route = $route;
}]);


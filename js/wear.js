var wear = angular.module("wear", ['ngRoute']);

wear.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/today', {
            //day = 'today';
            activetab: 'TODAY'
        }).
        when('/tomorrow', {
            //day = 'tomorrow';
            activetab: 'TOMORROW'
        }).
        otherwise({
            redirectTo: '/today'
        });
  }]);

//Create the MainCtrl Controller...
wear.controller("MainCtrl", function () {
    this.days = [
        {name: 'today', temp: 74, feel: 'sunny', rain: 0, humidity: 50, wind: 16},
        {name: 'tomorrow', temp: 65, feel: 'cloudy' rain: 10, humidity: 30, wind: 20}
    ];
});
angular.module('myApp', ["ngRoute"])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/', {
                    templateUrl: 'view/default.html',
                    controller: 'defaultController'
                })
                        .when('/first', {
                            templateUrl: 'view/first.html',
                            controller: 'firstController'
                        })
                        .when('/second', {
                            templateUrl: 'view/second.html',
                            controller: 'secondController'
                        })
                        .otherwise({
                            templateUrl: 'view/default.html',
                            controller: 'defaultController'
                        });

            }])
        .controller('secondController', ['$scope', function ($scope) {
                $scope.secondName = "second Name";
            }])
        .controller('secondController', ['$scope', function ($scope) {
                $scope.secondName = "second Name";
            }])
        .controller('defaultController', ['$scope', function ($scope) {
                $scope.secondName = "second Name";
            }]);
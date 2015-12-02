angular.module('routerApp', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
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

            }]);
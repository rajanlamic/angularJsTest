angular.module('myApp', ['routerApp'])
        .controller('secondController', ['$scope', function($scope) {
                $scope.secondName = "second Name";
            }]);
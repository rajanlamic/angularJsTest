angular.module("myApp", [])
        .controller("myController", function($scope, $parse) {
            $scope.$watch('getme', function(newVal, oldVal, scope) {
                if (newVal !== oldVal) {
                    scope.modifiedGetme = scope.getme;
                }
            });
        });
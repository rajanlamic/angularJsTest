angular.module('myApp', [])
        .controller('parentController', function($scope) {
            $scope.parVal = "from parent controller";

            $scope.parentClick = function() {
                alert('parent method');
            }
        })
        .controller('childController', function($scope) {
            $scope.chlVal = "from child controller";
        });
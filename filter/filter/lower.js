angular.module("myApp", [])
        .controller("MyController", ['$scope', '$filter', function($scope, $filter) {
                $scope.lowerFilter = function() {
                    $scope.previewText = $filter('lowercase')('Ari');
                }
            }]);

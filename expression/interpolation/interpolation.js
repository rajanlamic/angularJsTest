angular.module("myApp", [])
        .config(['$interpolateProvider',
            function($interpolateProvider) {
                $interpolateProvider.startSymbol('__');
                $interpolateProvider.endSymbol('__');
            }])
        .controller("MyController",
                function($scope, $interpolate) {
// Set up a watch
                    $scope.$watch('emailBody',
                            function(body) {
//                                if (body) {
//                                    var template = $interpolate(body);
//                                    $scope.previewText = template({to: $scope.to});
//                                }
                                $scope.previewText = $scope.emailBody;
                            });
                });

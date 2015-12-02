angular.module('myApp', [])
        .controller('myController1', ['$scope', function($scope) {
                    $scope.$on('listenMe', function(evt, fromListenerArg) {
                        alert(fromListenerArg);
                        console.log('evt', evt);
                        console.log('fromListenerArg', fromListenerArg);
                    });
                $scope.broadCastMe = function() {
                    $scope.$broadcast('listenMe', 'broadcasting argument');
                }
            }]);
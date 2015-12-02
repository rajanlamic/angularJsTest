angular.module('myApp', [])
        .controller('myController', function ($scope){
            $scope.getMe = function () {
                return 'getMe';
            }
            
            $scope.findMe = function () {
                return 'findMe';
            }
        })
        .directive('enterMe', function() {
            return {
                restrict: 'EA',
                link: function(scope, element, attrs) {
                    element.bind('click', function() {
                        alert('mouse click -> ' + scope.$apply(attrs.myVar));
                    });
                }
            };
        });
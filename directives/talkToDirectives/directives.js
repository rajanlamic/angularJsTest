angular.module('myApp', [])
        .directive('reqDir', function() {
            return {
                restrict: 'EA',
                controller: function($scope) {
                    $scope.activeClass = function() {
                        return 'active';
                    }
                    $scope.inactiveClass = function() {
                        return 'inactive';
                    }

                    this.setActiveClass = function() {
                        return 'active';
                    }
                },
                link: function(scope, element, attrs) {
                    console.log(scope.activeClass() + ' -> ' + scope.inactiveClass());
                }
            };
        })
        .directive('useDir', function() {
            return {
                restrict: 'EA',
                require: 'reqDir',
                link: function(scope, element, attrs, reqDirController) {
                    element.addClass(reqDirController.setActiveClass());
                }
            };
        });
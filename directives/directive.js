angular.module('myApp', [])
        .directive('myKalpana', function() {
            return {
                restrict: 'EA',
                replace: true,
                scope: {
                    'myVal' : '@'
                },
                template: '<a href="www.google.com">{{myVal}}</a>'
            };
        });
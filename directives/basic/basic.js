angular.module('myApp', [])
        .directive('superHero', function() {
            return {
                restrict: 'EA',
                replace: true,
                scope: {
                    'where': '@'
                },
                template: '<a href="www.google.com">Super Hero at {{where}}</a>',
                link: function(scope, element, attrs) {
                    element.addClass('mapit');
                }
            };
        });
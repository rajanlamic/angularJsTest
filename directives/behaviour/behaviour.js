angular.module('myApp', [])
        .directive('enterMe', function() {
            return {
                restrict: 'EA',
                link: function(scope, element, attrs) {
                    element.bind('click', function() {
                        alert('mouse click');
                    });
                }
            };
        })
        .directive('leaveMe', function() {
            return {
                restrict: 'EA',
                link: function(scope, element, attrs) {
                    element.bind('dblclick', function() {
                        alert('double click');
                    });
                }
            };
        });
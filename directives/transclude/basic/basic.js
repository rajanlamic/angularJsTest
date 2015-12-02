angular.module('myApp', [])
        .directive('basicTransclude', function() {
            return {
                restrict: 'EA',
                transclude: true,
                template: '<div><h2 ng-transclude>Transclude contents</h2></div>'
            };
        });
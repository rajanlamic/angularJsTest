angular.module('myApp', [])
        .controller('myController', ['$scope', '$http',  function ($scope, $http) {
            var promise = $http({
                method: 'GET',
                url: 'server1.html'
            });
            
            $scope.responseValue = 'data';
            
            promise.success(function (data, status, headers, config) {
                $scope.responseValue = data;
            })
                    .error(function (data, status, headers, config){
                        console.log('data', data);
                        console.log('status', status);
                        console.log('header', headers);
                        console.log('config', config);
                        $scope.responseValue = status;
                    });
            
        }]);
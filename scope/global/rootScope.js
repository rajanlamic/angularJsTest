angular.module("rootScopeApp", [])
        .run(function($rootScope) {
            $rootScope.globalLook = new Date();
        });

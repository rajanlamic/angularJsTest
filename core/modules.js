function setupModuleLoader(window) {

    function ensure(obj, name, factory) {
        if(obj[name]) {
            console.log(name + ' yes');
            return obj[name];
        } else {
            console.log(name + ' no');
            return obj[name] = factory();
        }
//        return obj[name] || (obj[name] = factory());
    }

    var angular = ensure(window, 'angular', Object);

    return ensure(angular, 'module', function() {
        /** @type {Object.<string, angular.Module>} */
        var modules = {};

        return function module(name, requires, configFn) {
            return ensure(modules, name, function() {
                
                var config = invokeLater('$injector', 'invoke');
                
                var invokeQueue = [];
                
                var moduleInstance = {
                    p:invokeQueue,
                    a: invokeLater('a', name),
                    b: invokeLater('b', name),
                    d: name
                };

                if (configFn) {
                    config(configFn);
                }

                return moduleInstance;

                function invokeLater(provider, method, insertMethod) {
                    return function() {
                        invokeQueue[insertMethod || 'push']([provider, method, arguments]);
                        return moduleInstance;
                    };
                }
            });
        };
    });
}

angularModule = setupModuleLoader(window);

angular.module('ngLocale');

 angular.module('ng', ['ngLocale'], ['$provide',
    function ngModule($provide) {
        
    }]);

cLocal = angular.module('ngLocale');
cng = angular.module('ng');

console.log('cLocal', cLocal);
console.log('cng', cng);


var myapp = angular.module('factoryTest', []);
        myapp.factory('sitem', function() {
            return {
                sname: 'rajan',
                saddress: 'London'
            };
        })
        .service('item', function() {
            return {
                name: 'srajan',
                address: 'sLondon'
            };
        })
        .provider('pitem', function() {
            this.thingFromConfig = "";
            this.name = 'drajan';
            this.$get = function() {
                var name = this.name;
                return {
                    getName: function() {
                        return name;
                    },
                    thingOnConfig: this.thingFromConfig
                };
            }

            this.setName = function(name) {
                this.name = name;
            };
        });
        
        myapp.controller('factoryTestController', function($scope, sitem, item, pitem) {
            $scope.sitem = sitem;
            $scope.item = item;
            $scope.pitem = pitem.getName();
            $scope.thingFromConfig = pitem.thingOnConfig;
        }); 
        
        myapp.config(function(pitemProvider) {
            pitemProvider.thingFromConfig = 'it works';
        });
(function () {

    var app = angular.module('myApp', ['lumx', 'ngRoute', 'ngMaterial', 'ngAnimate', 'ngAria']);

    app.config(function ($routeProvider) {

        $routeProvider.otherwise('/');

        $routeProvider
            .when("/", {
                templateUrl: "custom/templates/main.html"
            })
            .when("/advancedkits", {
                templateUrl: "custom/templates/advancedkits.html",
                activeTab: 0
            })
            .when("/advancedkits/getstarted", {
                templateUrl: "custom/templates/advancedkits.html",
                activeTab: 0
            })
            .when("/advancedkits/installation", {
                templateUrl: "custom/templates/advancedkits.html",
                activeTab: 1
            })
            .when("/advancedkits/commands", {
                templateUrl: "custom/templates/advancedkits.html",
                activeTab: 2
            })
            .when("/advancedkits/configuration", {
                templateUrl: "custom/templates/advancedkits.html",
                activeTab: 3
            })
            .when("/advancedkits/flags", {
                templateUrl: "custom/templates/advancedkits.html",
                activeTab: 4
            })
            .when("/myzone/getstarted", {
                templateUrl: "custom/templates/myzone.html",
                activeTab: 0
            })
            .when("/myzone/installation", {
                templateUrl: "custom/templates/myzone.html",
                activeTab: 1
            })
            .when("/myzone/commands", {
                templateUrl: "custom/templates/myzone.html",
                activeTab: 2
            })
            .when("/myzone/configuration", {
                templateUrl: "custom/templates/myzone.html",
                activeTab: 3
            })
            .when("/myzone", {
                templateUrl: "custom/templates/myzone.html",
                activeTab: 0
            })
            .when("/izone", {
                templateUrl: "custom/templates/izone.html",
                activeTab: 0
            })
            .when("/izone/getstarted", {
                templateUrl: "custom/templates/izone.html",
                activeTab: 0
            })
            .when("/izone/installation", {
                templateUrl: "custom/templates/izone.html",
                activeTab: 1
            })
            .when("/izone/commands", {
                templateUrl: "custom/templates/izone.html",
                activeTab: 2
            })
            .when("/izone/configuration", {
                templateUrl: "custom/templates/izone.html",
                activeTab: 3
            })
            .when("/izone/flags", {
                templateUrl: "custom/templates/izone.html",
                activeTab: 4
            })
            .when("/scgui", {
                templateUrl: "custom/templates/scgui.html"
            });
    });

    app.controller('ngMainController', function ($scope, $route) {
        $scope.$route = $route;
    });

    app.controller('navBarController', function ($scope, $mdSidenav) {
        $scope.openLeftMenu = function () {
            $mdSidenav('left').toggle();
        };
    });

    app.filter("matchMedia", function ($window) {
        return function matchMedia(mediaQueryString) {
            return $window.matchMedia(mediaQueryString).matches;
        }
    });
    app.controller('advancedkits_commandsCtrl', function ($scope, $http) {
        $scope.loading = true;
        $http.get("https://tryharddood.github.io/custom/projects/advancedkits/commands.php").then(function (response) {
            $scope.commands = response.data.commands;
        }).finally(function () {
            $scope.loading = false;
        });
    });

    app.controller('advancedkits_flagsCtrl', function ($scope, $http) {
        $scope.loading = true;
        $http.get("https://tryharddood.github.io/custom/projects/advancedkits/flags.php").then(function (response) {
            $scope.flags = response.data.flags;
        }).finally(function () {
            $scope.loading = false;
        });
    });

    app.controller('myzone_commandsCtrl', function ($scope, $http) {
        $scope.loading = true;
        $http.get("https://tryharddood.github.io/custom/projects/myzone/commands.php").then(function (response) {
            $scope.commands = response.data.commands;
        }).finally(function () {
            $scope.loading = false;
        });
    });

    app.controller('myzone_permissionsCtrl', function ($scope, $http) {
        $scope.loading = true;
        $http.get("https://tryharddood.github.io/custom/projects/myzone/permissions.php").then(function (response) {
            $scope.permissions = response.data.permissions;
        }).finally(function () {
            $scope.loading = false;
        });

    });

    app.controller('izone_commandsCtrl', function ($scope, $http) {
        $scope.loading = true;
        $http.get("https://tryharddood.github.io/custom/projects/izone/commands.php").then(function (response) {
            $scope.commands = response.data.commands;
        }).finally(function () {
            $scope.loading = false;
        });

    });

    app.controller('izone_flagsCtrl', function ($scope, $http) {
        $scope.loading = true;
        $http.get("https://tryharddood.github.io/custom/projects/izone/flags.php").then(function (response) {
            $scope.flags = response.data.flags;
        }).finally(function () {
            $scope.loading = false;
        });

    });

    app.directive('ngPrism', ['$interpolate', function ($interpolate) {
        "use strict";
        return {
            restrict: 'E',
            template: '<pre><code ng-transclude></code></pre>',
            replace: true,
            transclude: true
        };
    }]);

    app.directive( 'elemReady', function( $parse ) {
        return {
            restrict: 'A',
            link: function( $scope, elem, attrs ) {
                elem.ready(function(){
                    $scope.$apply(function(){
                        var func = $parse(attrs.elemReady);
                        func($scope);
                    })
                })
            }
        }
    })
}());

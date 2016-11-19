(function(window) {
    "use strict";

    var app = angular.module('myApp', ['lumx', 'ngRoute', 'ngMaterial', 'ngAnimate', 'ngAria']);
    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "custom/templates/main.html"
            })
            .when("/advancedkits", {
                templateUrl: "custom/templates/advancedkits.html"
            })
            .when("/myzone", {
                templateUrl: "custom/templates/myzone.html"
            })
            .when("/izone", {
                templateUrl: "custom/templates/izone.html"
            })
            .when("/scgui", {
                templateUrl: "custom/templates/scgui.html"
            });
    });

    app.controller('navBarController', function($scope, $mdSidenav) {
        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };
    });

    app.filter("matchMedia", function($window) {
        return function matchMedia(mediaQueryString) {
            return $window.matchMedia(mediaQueryString).matches;
        }
    });
    app.controller('advancedkits_commandsCtrl', function($scope, $http) {
        $scope.loading = true;
        $http.get("https://tryharddood.github.io/web/custom/projects/advancedkits/commands.php").then(function(response) {
            $scope.commands = response.data.commands;
        }).finally(function() {
            $scope.loading = false;
        });
    });

    app.controller('advancedkits_flagsCtrl', function($scope, $http) {
        $scope.loading = true;
        $http.get("https://tryharddood.github.io/web/custom/projects/advancedkits/flags.php").then(function(response) {
            $scope.flags = response.data.flags;
        }).finally(function() {
            $scope.loading = false;
        });
    });

    app.controller('myzone_commandsCtrl', function($scope, $http) {
        $scope.loading = true;
        $http.get("https://tryharddood.github.io/web/custom/projects/myzone/commands.php").then(function(response) {
            $scope.commands = response.data.commands;
        }).finally(function() {
            $scope.loading = false;
        });
    });

    app.controller('myzone_permissionsCtrl', function($scope, $http) {
        $scope.loading = true;
        $http.get("https://tryharddood.github.io/web/custom/projects/myzone/permissions.php").then(function(response) {
            $scope.permissions = response.data.permissions;
        }).finally(function() {
            $scope.loading = false;
        });

    });

    app.controller('izone_commandsCtrl', function($scope, $http) {
        $scope.loading = true;
        $http.get("https://tryharddood.github.io/web/custom/projects/izone/commands.php").then(function(response) {
            $scope.commands = response.data.commands;
        }).finally(function() {
            $scope.loading = false;
        });

    });

    app.controller('izone_flagsCtrl', function($scope, $http) {
        $scope.loading = true;
        $http.get("https://tryharddood.github.io/web/custom/projects/izone/flags.php").then(function(response) {
            $scope.flags = response.data.flags;
        }).finally(function() {
            $scope.loading = false;
        });

    });

    app.directive('ngPrism', ['$interpolate', function($interpolate) {
        "use strict";
        return {
            restrict: 'E',
            template: '<pre><code ng-transclude></code></pre>',
            replace: true,
            transclude: true
        };
    }]);
});

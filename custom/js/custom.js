function load(data) {
    var htmlcontent = $('#content ');
    htmlcontent.load('custom/pages/' + data + '.html')
    $compile(htmlcontent.contents())($scope);
}

function getLatestCommitsFor(p1) {
    var request = new XMLHttpRequest();
    request.onload = printLatestCommits;
    request.open('get', 'https://api.github.com/repos/tryharddood/' + p1 + '/commits', true);
    request.send();
}

function printLatestCommits() {
    var responseObj = JSON.parse(this.responseText);
    var lenght = responseObj.length >= 5 ? 5 : responseObj.length;
    for (var i = 0; i < lenght; i++) {
        var obj = responseObj[i];

        $('#commits').append('<li class="list-row"><a href="' + obj.html_url +
            '" target="_blank"><div class="list-row__primary"><i style="font-size: 30px;" class="mdi mdi-git"></i></div></a><div class="list-row__content"><span class="display-block tc-black">' + obj.commit.author.name + ' at ' + obj.commit
            .author.date + '</span><span class="display-block fs-body-1 tc-black-2">' + obj.commit.message + '</span></div></li>');
    }
}

app.controller('advancedkits_commandsCtrl', function($scope, $http) {
    $scope.loading = true;
    $http.get("http://tryharddood.epizy.com/custom/projects/advancedkits/commands.php").then(function(response) {
      $scope.commands = response.data.commands;
    }).finally(function() {
        $scope.loading = false;
    });
});

app.controller('advancedkits_flagsCtrl', function($scope, $http) {
    $scope.loading = true;
    $http.get("http://tryharddood.epizy.com/custom/projects/advancedkits/flags.php").then(function(response) {
      $scope.flags = response.data.flags;
    }).finally(function() {
        $scope.loading = false;
    });
});

app.controller('myzone_commandsCtrl', function($scope, $http) {
    $scope.loading = true;
    $http.get("http://tryharddood.epizy.com/custom/projects/myzone/commands.php").then(function(response) {
      $scope.commands = response.data.commands;
    }).finally(function() {
        $scope.loading = false;
    });
});

app.controller('myzone_permissionsCtrl', function($scope, $http) {
    $scope.loading = true;
    $http.get("http://tryharddood.epizy.com/custom/projects/myzone/permissions.php").then(function(response) {
      $scope.permissions = response.data.permissions;
    }).finally(function() {
        $scope.loading = false;
    });

});

app.controller('izone_commandsCtrl', function($scope, $http) {
    $scope.loading = true;
    $http.get("http://tryharddood.epizy.com/custom/projects/izone/commands.php").then(function(response) {
      $scope.commands = response.data.commands;
    }).finally(function() {
        $scope.loading = false;
    });

});

app.controller('izone_flagsCtrl', function($scope, $http) {
    $scope.loading = true;
    $http.get("http://tryharddood.epizy.com/custom/projects/izone/flags.php").then(function(response) {
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

var Polytalk = angular.module('Polytalk', []);
Polytalk.config(function ($routeProvider) {
  $routeProvider.
    when('/', {templateUrl: 'partials/overview.html'}).
    when('/api/:language', {templateUrl: 'partials/api.html'}).
    when('/ruby', {templateUrl: 'partials/ruby.html'}).
    when('/php', {templateUrl: 'partials/php.html'}).
    when('/node', {templateUrl: 'partials/node.html'}).
    when('/faq', {templateUrl: 'partials/faq.html'}).
    otherwise({redirectTo: '/'});

});

function AppController ($scope, $location, $rootScope) {

  $scope.$on("$routeChangeSuccess", function (event, next, current) {
    $scope.page = $location.path().split('/')[1];
    if ($scope.page == 'api') {
      $scope.api = $location.path().split('/')[2];
      switch ($scope.api) {
        case 'ruby':
          $scope.api_name = 'Ruby';
          break;
        case 'php':
          $scope.api_name = 'PHP';
          break;
        case 'javascript':
          $scope.api_name = 'JavaScript';
          break;
        case 'coffeescript':
          $scope.api_name = 'CoffeeScript';
          break;
      }
    } else {
      $scope.api = null;
    }
  });

  $scope.$on('$viewContentLoaded', function() {
    $('.method').hide();
    $('.method.' + $scope.api).show();
    prettyPrint();
  });
    
}

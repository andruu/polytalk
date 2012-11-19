var Polytalk = angular.module('Polytalk', []);
Polytalk.config(function ($routeProvider) {
  $routeProvider.
    when('/', {templateUrl: 'partials/overview.html'}).
    when('/ruby', {templateUrl: 'partials/ruby.html'}).
    when('/php', {templateUrl: 'partials/php.html'}).
    when('/node', {templateUrl: 'partials/node.html'}).
    when('/faq', {templateUrl: 'partials/faq.html'}).
    otherwise({redirectTo: '/'});

});

function AppController ($scope, $location, $rootScope) {
  // $scope.page = $location.path().split('/')[1];
  $scope.$on("$routeChangeStart", function (event, next, current) {
    // console.log('hello');
    $scope.page = $location.path().split('/')[1];
  });
}
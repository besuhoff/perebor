angular.module('Perebor', ['ngRoute', 'app-templates'])
.controller('MainController', function () {

})
.controller('ProjectController', function () {

})
.directive('archive', function() {
  return {
    restrict: 'A',
    compile: function($element) {
      $element.attr('title', 'Работа сдана в архив');
      $element.addClass('archive');
    }
  };
})
.directive('breadcrumbs', function() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    link: function($scope, $element, attrs) {
      $scope.archive = 'archive' in attrs;
    },
    templateUrl: 'js/templates/breadcrumbs.html',
    replace: true
  };
})
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/templates/index.html',
      controller: 'MainController'
    })
    .when('/index.html', {
      templateUrl: 'js/templates/index.html',
      controller: 'MainController'
    })
    .when('/projects/:name', {
      templateUrl: function (urlattr) {
        return 'js/templates/projects/' + urlattr.name + '.html';
      },
      controller: 'ProjectController'
    });

  $locationProvider.html5Mode(true);
});
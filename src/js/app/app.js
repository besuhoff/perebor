angular.module('Perebor', ['ui.router', 'ngCookies', 'app-templates', 'pascalprecht.translate'])
  .directive('archive', function($translate) {
    return {
      restrict: 'A',
      link: function($scope, $element) {
        $translate('MOVED_TO_ARCHIVE').then(function(text) {
          $element.attr('title', text);
          $element.addClass('archive');
        });
      }
    };
  })
  .directive('breadcrumbs', function() {
    return {
      restrict: 'E',
      scope: {
        name: '@'
      },
      link: function($scope, $element, attrs) {
        $scope.itemIsArchive = attrs.itemIsArchive;
      },
      templateUrl: 'js/templates/breadcrumbs.html',
      replace: true
    };
  })
  .service('LanguageService', function($cookies, $translate) {
    this.getCurrentLanguage = function() {
      return $cookies.getObject('lang') || 'ua';
    };

    this.initLanguage = function() {
      var lang = this.getCurrentLanguage();
      $translate.use(lang);
      $cookies.putObject('lang', lang);
    };

    this.changeLanguage = function(lang) {
      $cookies.putObject('lang', lang);
      this.initLanguage();
    }
  })
  .directive('langSwitcher', function(LanguageService) {
    'use strict';

    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'js/templates/lang-switcher.html',
      link: function(scope) {
        scope.langPopupVisible = false;
        scope.availableLanguages = ['ru', 'ua'];

        function initLanguageList() {
          scope.currentLanguage = LanguageService.getCurrentLanguage();
        }

        scope.$watch(function() {
          return LanguageService.getCurrentLanguage();
        }, function() {
          initLanguageList();
        });


        scope.switchLanguage = function(lang, $event) {
          $event.stopPropagation();
          LanguageService.changeLanguage(lang);
          scope.langPopupVisible = false;
        };
      }
    };
  })
  .config(function($cookiesProvider) {
    var d = new Date();
    d.setYear(d.getFullYear() + 1);
    $cookiesProvider.defaults = {
      expires: d,
      path: '/',
      domain: window.location.host
    };

  })
  .config(function($stateProvider, $locationProvider) {
    $stateProvider
      .state('common', {
        url: '/',
        templateUrl: 'js/templates/base.html',
        abstract: true
      })
      .state('index', {
        url: '',
        parent: 'common',
        templateUrl: 'js/templates/portfolio.html'
      })
      .state('indexHtml', {
        url: 'index.html',
        parent: 'common',
        templateUrl: 'js/templates/portfolio.html'
      })
      .state('projects', {
        url: 'projects/:name',
        parent: 'common',
        template: '<ng-include src="getTemplate()"></ng-include>',
        controller: function($scope, $stateParams, LanguageService) {
          $scope.getTemplate = function() {
            var lang = LanguageService.getCurrentLanguage();
            return 'js/templates/projects/' + $stateParams.name  + '.' + lang  + '.html';
          }
        }
      });

    $locationProvider.html5Mode(true);
  })
  .run(function($rootScope, LanguageService) {
    $rootScope.$on('$stateChangeSuccess', function() {
      LanguageService.initLanguage();
    });

    LanguageService.initLanguage();
  });
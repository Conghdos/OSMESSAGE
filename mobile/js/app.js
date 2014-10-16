// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])
.run(function($ionicPlatform,$rootScope) {
    $ionicPlatform.ready(function() {
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
    .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })
    // Each tab has its own nav history stack:
    .state('tab.chat', {
        url: '/chat',
        views: {
            'chat': {
                templateUrl: 'templates/chat.html',
                controller: 'ChatCtrl'
            }
        }
    })		
    .state('tab.saved', {
        url: '/saved',
        views: {
            'tab-saved': {
                templateUrl: 'templates/tab-saved.html',
                controller: 'NavCtrl'
            }
        }
    })

    .state('tab.settings', {
        url: '/settings',
        views: {
            'tab-settings': {
                templateUrl: 'templates/tab-settings.html',
                controller: 'NavCtrl'
            }
        }
    })

    .state('tab.keywords', {
        url: '/keywords',
        views: {
            'tab-keywords': {
                templateUrl: 'templates/tab-keywords.html',
                controller: 'NavCtrl'
            }
        }
    })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/chat');
})


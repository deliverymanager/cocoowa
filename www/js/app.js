// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('cocoowa', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/pages/menu/menu.html',
        controller: 'MenuController'
      })

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/pages/home/home.html',
            controller: 'HomeController'
          }
        }
      })

      .state('app.presentation', {
        url: '/presentation',
        views: {
          'menuContent': {
            templateUrl: 'templates/pages/presentation/presentation.html',
            controller: 'PresentationController'
          }
        }
      })

      .state('app.photos', {
        url: '/photos',
        views: {
          'menuContent': {
            templateUrl: 'templates/pages/photos/photos.html',
            controller: 'PhotosController'
          }
        }
      })

      .state('app.map', {
        url: '/map',
        views: {
          'menuContent': {
            templateUrl: 'templates/pages/map/map.html',
            controller: 'MapController'
          }
        }
      })

      .state('app.newsletter', {
        url: '/newsletter',
        views: {
          'menuContent': {
            templateUrl: 'templates/pages/newsletter/newsletter.html',
            controller: 'NewsletterController'
          }
        }
      })

      .state('app.comments', {
        url: '/comments',
        views: {
          'menuContent': {
            templateUrl: 'templates/pages/comments/comments.html',
            controller: 'CommentsController'
          }
        }
      })

      .state('app.news', {
        url: '/news',
        views: {
          'menuContent': {
            templateUrl: 'templates/pages/news/news.html',
            controller: 'NewsController'
          }
        }
      })

      .state('app.offers', {
        url: '/offers',
        views: {
          'menuContent': {
            templateUrl: 'templates/pages/offers/offers.html',
            controller: 'OffersController'
          }
        }
      })

      .state('app.categories', {
        url: '/categories',
        views: {
          'menuContent': {
            templateUrl: 'templates/pages/categories/categories.html',
            controller: 'CategoriesController'
          }
        }
      })

      .state('app.products', {
        url: '/products',
        views: {
          'menuContent': {
            templateUrl: 'templates/pages/categories/products.html',
            controller: 'ProductsController'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
  });

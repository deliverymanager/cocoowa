angular.module('cocoowa')
  .controller('MenuController', function ($ionicSideMenuDelegate, $ionicHistory, $state, $rootScope, $scope, $http, _, $ionicPlatform, $ionicPopup, $timeout, Languages) {

    console.log("MenuController loaded!");

    //Navigation to products
    $rootScope.navigateTo = function (state) {
      $ionicSideMenuDelegate.toggleLeft(false);
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });
      $state.go(state);
    }
  });

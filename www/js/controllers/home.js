angular.module('cocoowa')
  .controller('HomeController', function ($timeout, $rootScope, $scope, $http, _, $ionicPlatform, $ionicPopup) {

    console.log('HomeController loaded!');

    $scope.$on('$ionicView.afterEnter', function () {
      console.log("Loading Swiper");
      $scope.homeSwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        autoplay: 4000
      });

    });

    $scope.$on('$ionicView.beforeLeave', function () {
      console.log("Destory");
      $scope.homeSwiper.destroy();
    });
  });

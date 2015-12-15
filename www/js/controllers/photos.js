angular.module('cocoowa')
  .controller('PhotosController', function ($scope, $timeout, $rootScope) {

    console.log("PhotosController loaded!");

    /*SWIPER*/


    $scope.$on('$ionicView.afterEnter', function () {
      console.log("Loading Swiper");
      $rootScope.swiper = new Swiper(angular.element(document.querySelector("#photosSwiper")), {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        autoplay: 4000
      });

    });

    $scope.$on('$ionicView.beforeLeave', function () {
      console.log("Destory");
      $rootScope.swiper.destroy();
    });
  });

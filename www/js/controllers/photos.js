angular.module('cocoowa')
  .controller('PhotosController', function ($scope, $timeout) {

    console.log("PhotosController loaded!");

    /*SWIPER*/


    $scope.$on('$ionicView.afterEnter', function () {
      console.log("Loading Swiper");
      $scope.photosSwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        autoplay: 4000
      });

    });

    $scope.$on('$ionicView.beforeLeave', function () {
      console.log("Destory");
      $scope.photosSwiper.destroy();
    });
  });

angular.module('cocoowa')
  .controller('PhotosController', function ($scope, $timeout, $rootScope, $ionicSideMenuDelegate) {

    console.log("PhotosController loaded!");

    /*SWIPER*/
    $ionicSideMenuDelegate.canDragContent(false);

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

  });

angular.module('cocoowa')
  .controller('PhotosController', function ($scope, $timeout, $rootScope, $ionicSideMenuDelegate) {

    console.log("PhotosController loaded!");

    /*SWIPER*/
    $ionicSideMenuDelegate.canDragContent(false);

    $scope.$on('$ionicView.afterEnter', function () {
      $rootScope.swiper = new Swiper(angular.element(document.querySelector("#photosSwiper")), {
        direction: 'horizontal',
        preloadImages: false,
        lazyLoadingInPrevNext: true,
        lazyLoading: true,
        loop: true,
        effect: 'fade',
        autoplay: 4000
      });

    });

  });

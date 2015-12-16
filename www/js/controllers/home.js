angular.module('cocoowa')
  .controller('HomeController', function ($timeout, $rootScope, $scope, $state, $ionicSideMenuDelegate, $ionicHistory) {

    console.log('HomeController loaded!');

    $scope.$on('$ionicView.afterEnter', function () {
      console.log("Loading Swiper");
      $rootScope.swiper = new Swiper(angular.element(document.querySelector("#homeSwiper")), {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        autoplay: 4000
      });

    });

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

angular.module('cocoowa')
  .controller('HomeController', function ($timeout, $rootScope, $scope, $state, $ionicSideMenuDelegate) {

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

    $scope.$on('$ionicView.beforeLeave', function () {
      console.log("Destory");
      $rootScope.swiper.destroy();
    });

    //Navigation to products
    $rootScope.navigateTo = function(state){
      $ionicSideMenuDelegate.toggleLeft(false);
      $state.go(state);
    }

  });

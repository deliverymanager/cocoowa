angular.module('cocoowa')
  .controller('HomeController',function($rootScope, $scope, $http, _, $ionicPlatform, $ionicPopup){

    console.log('HomeController loaded!');

    /*SWIPER*/
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      effect: 'fade',
      autoplay: 3000
    });

});

angular.module('cocoowa')
  .controller('PhotosController', function($scope){

    console.log("PhotosController loaded!");

    /*SWIPER*/
    $scope.initSwiper = function(){
      var photoSwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        autoplay: 4000
      });
    };


  });

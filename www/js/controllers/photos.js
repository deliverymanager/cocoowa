angular.module('cocoowa')
  .controller('PhotosController', function(){

    /*SWIPER*/
    var photoSwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      effect: 'fade',
      autoplay: 3000
    });

  });

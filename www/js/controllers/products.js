angular.module('cocoowa')
  .controller('ProductsController', function($scope, $rootScope, $state, $ionicSideMenuDelegate, Products){

    console.log("ProductsController loaded!");

    /*TEMPORARY CALL=========================================================*/
    //Navigate to category products
    var menuToggle = false;

    $scope.loadProducts = function(category_id){

      $rootScope.productsArray = [];

      Products.getAll()
        .success(function(res){

          $rootScope.productsArray = res.data;

          $ionicSideMenuDelegate.toggleLeft(false);
          $state.go('app.products');

        })
        .error(function(err){
          console.log("There was an error of getting products: ",err);
        });

    };

    $scope.loadProducts("1");

    $scope.toggleMenuLeft = function(){
      $ionicSideMenuDelegate.toggleLeft(!menuToggle);
    };

    /*TEMPORARY CALL=========================================================*/


    /*SWIPER*/
    $scope.$on('$ionicView.afterEnter', function () {
      console.log("Loading Swiper");
      $rootScope.swiper = new Swiper(angular.element(document.querySelector("#productsSwiper")), {
        // Optional parameters
        direction: 'horizontal',
        lazyLoading:true,
        loop: true,
        effect: 'slide'
      });

    });

    $scope.$on('$ionicView.beforeLeave', function () {
      console.log("Destory");
      $rootScope.swiper.destroy();
    });

  });

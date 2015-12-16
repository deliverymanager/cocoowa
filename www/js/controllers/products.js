angular.module('cocoowa')
  .controller('ProductsController', function ($ionicLoading, $timeout, $scope, $rootScope, $state, $ionicSideMenuDelegate, Products) {

    console.log("ProductsController loaded!");
    $ionicSideMenuDelegate.canDragContent(false);

    /*TEMPORARY CALL=========================================================*/
    //Navigate to category products
    var menuToggle = false;

    $scope.loadProducts = function (category_id) {
      $ionicLoading.show();
      $rootScope.productsArray = [];

      Products.getAll()
        .success(function (res) {

          $timeout(function () {
            $ionicLoading.hide();
            $rootScope.productsArray = res.data;
            console.log($rootScope.swiper);
          });

        })
        .error(function (err) {
          $ionicLoading.hide();
          Toast.show("Η λήψη των προϊόντων απέτυχε!", "top");
          console.log("There was an error of getting products: ", err);
        });

    };

    $scope.loadProducts("1");

    $scope.toggleMenuLeft = function () {
      $ionicSideMenuDelegate.toggleLeft(!menuToggle);
    };

    $rootScope.swiper = new Swiper(angular.element(document.querySelector("#productsSwiper")), {
      direction: 'horizontal',
      loop: true,
      preloadImages: false,
      autoHeight: false,
      lazyLoadingInPrevNext: true,
      lazyLoading: true,
      paginationClickable: true,
      pagination: angular.element(document.querySelector("#productsPagination")),
      prevButton: angular.element(document.querySelector("#productsBtnPrev")),
      nextButton: angular.element(document.querySelector("#productsBtnNext")),
      swipeHandler: angular.element(document.querySelector("#swipeHandler")),
      effect: 'slide'
    });
  });

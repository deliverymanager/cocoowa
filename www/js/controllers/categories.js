angular.module('cocoowa')
  .controller('CategoriesController', function ($scope, $rootScope,  Categories, $state, $ionicSideMenuDelegate, Products) {

    console.log("categoriesController loaded!");

    $scope.categoriesArray = [];

    $scope.getCategories = function(){
      Categories.getAll()
        .success(function(res){
          $scope.categoriesArray = res.data;
        })
        .error(function(err){
          console.log("There war an error on fetching categories: ",err);
        });
    };

    $scope.getCategories();

    //Navigate to category products
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

    }

  });

angular.module("cocoowa").controller("OffersController",function($scope,Offers,$rootScope){

  console.log("OffersController loaded!");

  $scope.offersArray = [];

  Offers.getLatest($rootScope.currentLanguage.language)
    .success(function(res){
      console.log("");
      $scope.offersArray = res;
    })
    .error(function(err){
      console.log("Error on fetching offersArray: ",err);
    });

});

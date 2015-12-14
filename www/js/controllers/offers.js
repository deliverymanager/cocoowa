angular.module("cocoowa").controller("OffersController",function($scope,Offers,$rootScope){

  console.log("OffersController loaded!");

  $scope.offersArray = [];

  Offers.getLatest()
    .success(function(res){
      console.log("");
      $scope.offersArray = res.offersArray;
    })
    .error(function(err){
      console.log("Error on fetching offersArray: ",err);
    });

});

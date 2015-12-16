angular.module("cocoowa").controller("OffersController", function ($scope, Offers, $rootScope, $ionicSideMenuDelegate) {

  console.log("OffersController loaded!");
  $ionicSideMenuDelegate.canDragContent(true);
  $scope.offersArray = [];

  Offers.getLatest()
    .success(function (res) {
      if (!res) {
        $scope.offersArray = [];
      } else {
        $scope.offersArray = res.offersArray;
      }
    })
    .error(function (err) {
      console.log("Error on fetching offersArray: ", err);
    });

});

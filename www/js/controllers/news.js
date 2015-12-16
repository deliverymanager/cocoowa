angular.module("cocoowa").controller("NewsController", function (News, $rootScope, $scope, $ionicLoading) {

  console.log('NewsController loaded!');

  //Initializing newsArray
  $scope.newsArray = [];
  $ionicLoading.show();
  News.getLatest()
    .success(function (res) {
      $scope.newsArray = res.newsArray;
      console.log("newsArray: ", $scope.newsArray);
      $ionicLoading.hide();
    })
    .error(function (err) {
      console.log("Error on fetching the news: ", err);
      $ionicLoading.hide();
    });

});

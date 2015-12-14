angular.module("cocoowa").controller("NewsController",function(News,$rootScope,$scope){

  console.log('NewsController loaded!');

  //Initializing newsArray
  $scope.newsArray = [];

  News.getLatest()
    .success(function(res){
      $scope.newsArray = res.newsArray;
      console.log("newsArray: ",$scope.newsArray);
    })
    .error(function(err){
      console.log("Error on fetching the news: ",err);
    });

});

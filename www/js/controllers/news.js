angular.module("cocoowa").controller("NewsController",function(News,$rootScope,$scope){

  console.log('NewsController loaded!');

  //Initializing newsArray
  $scope.newsArray = [];

  News.getLatest($rootScope.currentLanguage.language)
    .success(function(res){
      $scope.newsArray = res;
    })
    .error(function(err){
      console.log("Error on fetching the news: ",err);
    });

});

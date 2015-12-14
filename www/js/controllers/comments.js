angular.module('cocoowa').controller('CommentsController', function ($scope, Comments, Toast) {

  console.log("CommentsController loaded!");

  //Initializing the comments  parameters object
  $scope.commentsObject = {
    "name": "",
    "email": "",
    "comments": ""
  };

  //Validating the commentsParametersObject object

  $scope.sendComment = function(){

    if($scope.commentsObject.name === ''){
      Toast.show("Παρακαλώ εισάγετε όνομα",'top');
    }else if($scope.commentsObject.email === ''){
      Toast.show("Παρακαλώ εισάγετε email",'top');
    }else if($scope.commentsObject.comments === ''){
      Toast.show("Παρακαλώ γράψτε την γνώμη σας στα σχόλια",'top');
    }else{
      //POST request
      Comments.send($scope.commentsObject);
    }

  };

});

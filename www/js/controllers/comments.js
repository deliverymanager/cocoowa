angular.module('cocoowa').controller('CommentsController', function ($scope, Comments) {

  //Initializing the comments  parameters object
  $scope.commentsObject = {
    "name": "",
    "email": "",
    "comments": ""
  };

  //Validating the commentsParametersObject object

  $scope.sendComment = function(){

    if(commentsObject.name === ''){
      Toast.show("Παρακαλώ εισάγετε όνομα",'top');
    }else if(commentsObject.email === ''){
      Toast.show("Παρακαλώ εισάγετε email",'top');
    }else if(commentsObject.comments === ''){
      Toast.show("Παρακαλώ γράψτε την γνώμη σας στα σχόλια",'top');
    }else{
      //POST request
      Comments.send(commentsObject);
    }

  };

});

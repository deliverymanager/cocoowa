angular.module('cocoowa').controller('CommentsController', function ($scope, Comments) {

  //Initializing the comments  parameters object
  $scope.commentsObject = {
    "name": "",
    "email": "",
    "comments": ""
  };

  //Validating the commentsParametersObject object

  $scope.sendComment = function(){



  };

  //POST request
  Comments.send()

});

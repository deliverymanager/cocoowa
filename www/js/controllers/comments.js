angular.module('cocoowa').controller('CommentsController', function ($scope, Comments, Toast, $ionicLoading, $ionicSideMenuDelegate) {

  console.log("CommentsController loaded!");
  $ionicSideMenuDelegate.canDragContent(true);
  //Initializing the comments  parameters object
  $scope.commentsObject = {
    "name": "",
    "email": "",
    "comments": ""
  };

  //Validating the commentsParametersObject object

  $scope.sendComment = function () {

    if (!$scope.commentsObject.name) {
      Toast.show("Παρακαλώ εισάγετε όνομα", 'top');
    } else if (!$scope.commentsObject.email) {
      Toast.show("Παρακαλώ εισάγετε ένα έγκυρο email", 'center');
    } else if (!$scope.commentsObject.comments) {
      Toast.show("Παρακαλώ γράψτε την γνώμη σας στα σχόλια", 'center');
    } else if (!$scope.commentsObject.email) {
      Toast.show("Παρακαλώ εισάγετε ένα εγκυρο email", 'center');
    } else {
      //POST request
      $ionicLoading.show();
      Comments.send($scope.commentsObject)
        .success(function (res) {
          if (res.success) {
            $ionicLoading.hide();
            console.log(res.message);
            Toast.show("Η παρατήρηση σας καταχωρήθηκε επιτυχώς!", "center");
          } else {
            $ionicLoading.hide();
            Toast.show("Η καταχώρηση της παρατήρησής σας απέτυχε", "center");
            console.log(res.message);
          }
        }).error(function (err) {
        Toast.show("Παρουσιάστηκε πρόβλημα κατά την καταχώρηση της παρατήρησής σας. Παρακαλώ προσπαθήστε ξανά αργότερα", "center");
        console.log("There was an error: ", err);
      });
    }

  };

});

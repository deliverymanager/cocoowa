angular.module('cocoowa').controller('CommentsController', function ($scope, Comments, Toast, $ionicLoading) {

  console.log("CommentsController loaded!");

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
      Toast.show("Παρακαλώ εισάγετε ένα έγκυρο email", 'top');
    } else if (!$scope.commentsObject.comments) {
      Toast.show("Παρακαλώ γράψτε την γνώμη σας στα σχόλια", 'top');
    } else {
      //POST request
      $ionicLoading.show();
      Comments.send($scope.commentsObject)
        .success(function (res) {
          if (res.success) {
            $ionicLoading.hide();
            console.log(res.message);
            Toast.show("Η παρατήρηση σας καταχωρήθηκε επιτυχώς!", "top");
          } else {
            $ionicLoading.hide();
            Toast.show("Η καταχώρηση της παρατήρησής σας απέτυχε", "top");
            console.log(res.message);
          }
        }).error(function (err) {
        Toast.show("Παρουσιάστηκε πρόβλημα κατά την καταχώρηση της παρατήρησής σας. Παρακαλώ προσπαθήστε ξανά αργότερα", "top");
        console.log("There was an error: ", err);
      });
    }

  };

});

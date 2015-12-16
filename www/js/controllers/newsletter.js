angular.module('cocoowa').controller('NewsletterController', function (Newsletter, $scope, Toast, $ionicLoading, $ionicSideMenuDelegate) {

  console.log("NewsletterController loaded!");
  $ionicSideMenuDelegate.canDragContent(true);
  //Initializing object
  $scope.data = {
    email: ""
  };


  $scope.registerForNewsletter = function () {

    console.log("email: ", $scope.data.email);

    if (!$scope.data.email) {
      Toast.show("Παρακαλώ εισάγετε ένα έγκυρο email", "top");
    } else {
      //Registering for subscription
      $ionicLoading.show();
      Newsletter.subscribe($scope.data.email)
        .success(function (res) {
          if (res.success) {
            console.log(res.message);
            $ionicLoading.hide();
            Toast.show("Επιτυχής εγγραφή στο newsletter!", "top");
          } else {
            $ionicLoading.hide();
            Toast.show("Ανεπιτυχής εγγραφή στο newsletter!", "top");
            console.log(res.message);
          }
        })
        .error(function (err) {
          Toast.show("Παρουσιάστηκε πρόβλημα κατά την εγγραφή σας στο newsletter. Παρακαλώ προσπαθήστε ξανά αργότερα", "top");
          console.log("There was an error: ", err);
        });
    }
  };

});

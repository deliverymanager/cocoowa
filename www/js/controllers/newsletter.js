angular.module('cocoowa').controller('NewsletterController',function(Newsletter,$scope,Toast){

  console.log("NewsletterController loaded!");

  //Initializing object
  $scope.data = {
    email:""
  };


  $scope.registerForNewsletter = function(){

    console.log("email: ",$scope.data.email);

    if($scope.data.email === ''){
      Toast.show("παρακαλώ εισάγετε το email σας","top");
    }else{
      //Registering for subscription
      Newsletter.checkSubscription($scope.data.email);
    }
  };

});

angular.module('cocoowa').controller('NewsletterController',function(Newsletter,$scope){

  //Checking for subscription
  Newsletter.checkSubscription()

});

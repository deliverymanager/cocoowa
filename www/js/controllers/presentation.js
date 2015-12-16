angular.module('cocoowa').controller('PresentationController', function ($ionicSideMenuDelegate) {

  console.log("PresentationController loaded!");

  $ionicSideMenuDelegate.canDragContent(true);
});

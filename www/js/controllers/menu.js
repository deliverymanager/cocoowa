angular.module('cocoowa')
  .controller('MenuController', function ($rootScope, $scope, $http, _, $ionicPlatform, $ionicPopup, $timeout, Languages) {

    console.log("MenuController loaded!");

    $ionicPlatform.ready(function () {
      Languages.get()
        .success(function (response) {

          console.log("Success in getting languages.json!");

          /*Array that contains all language objects*/
          $scope.languages = response;

          /*Setting the current language*/
          $timeout(function () {
            $rootScope.currentLanguage = _.findWhere($scope.languages, {"language": "greek"});
            console.log($rootScope.currentLanguage);
          });
        })
        .error(function (err) {

          console.log("Error on fetching the languages.json: " + err);

        });
    });

    /*Function for changing the language*/
    $scope.changeLanguage = function () {

      $scope.popupVariablesObject = {
        selectedLanguage: $rootScope.currentLanguage.language
      };

      $ionicPopup.show({
        templateUrl: 'templates/popups/languagesPopup.html',
        title: "Select language",
        scope: $scope,
        buttons: [
          {
            text: '<b>OK</b>',
            type: 'button-positive',
            onTap: function (e) {
              $rootScope.currentLanguage = _.findWhere($scope.languages, {"language": $scope.popupVariablesObject.selectedLanguage});
              console.log("Current Language: ", $rootScope.currentLanguage.language);
            }
          }
        ]
      });
    };


  });

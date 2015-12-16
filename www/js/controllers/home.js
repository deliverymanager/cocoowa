angular.module('cocoowa')
  .controller('HomeController', function ($ionicPopup, $ionicPlatform, Languages, $timeout, $rootScope, $scope, $state, $ionicSideMenuDelegate, $ionicHistory) {

    console.log('HomeController loaded!');
    $ionicPlatform.ready(function () {

      Languages.get()
        .success(function (response) {

          console.log("Success in getting languages.json!");

          /*Array that contains all language objects*/
          $scope.languages = response;

          /*Setting the current language*/
          $timeout(function () {
            //In case I just come back to the home page and the user has selected a language, I should use his selection!
            if(!$rootScope.currentLanguage){
              $rootScope.currentLanguage = _.findWhere($scope.languages, {"language": "greek"});
            }

            $timeout(function () {
              $rootScope.swiper = new Swiper(angular.element(document.querySelector("#homeSwiper")), {
                direction: 'horizontal',
                preloadImages: false,
                lazyLoading: true,
                loop: true,
                effect: 'fade',
                autoplay: 4000
              });
            }, 1000);
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

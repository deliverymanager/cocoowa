angular.module("cocoowa")
  .factory("Toast", function ToastFactory($timeout, $ionicLoading) {
      return {
        show: function (message, position) {

          //position: 'top', 'center', 'bottom' , duration: 'short', 'long'

          if (position) {
            if (window.cordova) {
              $ionicLoading.hide();
              window.plugins.toast.showWithOptions({
                message: message,
                duration: "short",
                position: position
              });
            } else {
              $ionicLoading.show({
                template: message
              });

              $timeout(function () {
                $ionicLoading.hide();
              }, 1500);
            }
          } else {

            $ionicLoading.show({
              template: message
            });

            $timeout(function () {
              $ionicLoading.hide();
            }, 2000);
          }
        }
      };
    }
  )
;

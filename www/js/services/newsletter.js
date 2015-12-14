angular.module('cocoowa')
  .factory("Newsletter", function NewsletterFactory($http) {
    return {

      subscribe: function (data) {
        console.log("Parameters for subscription POST", data);

        return $http({

          method: 'POST',
          timeout: 10000,
          url: '',
          data: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        });
      },

      checkSubscription: function (data) {
        console.log("Parameters for checking subscription POST", data);

        return $http({

          method: 'POST',
          timeout: 10000,
          url: '',
          data: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        });
      }
    }
  });

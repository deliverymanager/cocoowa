angular.module('cocoowa')
  .factory("Newsletter", function NewsletterFactory($http) {
    return {

      subscribe: function (data) {
        console.log("Parameters for subscription POST", data);

        return $http({

          method: 'POST',
          timeout: 10000,
          url: 'https://api.deliverymanager.gr/cocoowa/postsubscriptiontonewsletter',
          data: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        });
      }
    }
  });

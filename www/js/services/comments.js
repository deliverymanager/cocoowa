angular.module('cocoowa')
  .factory("Comments",function NewsletterFactory($http){
    return{

      send: function(data){
        console.log("Parameters for sending a comment POST",data);

        return $http({

          method:'POST',
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

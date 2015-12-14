angular.module('cocoowa')
  .factory("News",function NewsletterFactory($http){
    return{

      getLatest: function(){
        return $http({

          method:'GET',
          timeout: 10000,
          url: 'https://0ikanmdrx1.execute-api.eu-west-1.amazonaws.com/production/getnews',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        });
      }
    }
  });

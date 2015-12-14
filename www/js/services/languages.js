angular.module('cocoowa')
  .factory("Languages",function LanguagesFactory($http){
    return{
      get: function(){
        return $http({
          method:'GET',
          timeout: 10000,
          url: 'https://0ikanmdrx1.execute-api.eu-west-1.amazonaws.com/production/getlanguages',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        });
      }
    }
  });

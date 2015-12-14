angular.module('cocoowa')
  .factory("Categories",function CategoriesFactory($http){
    return{
      get: function(){
        return $http({
          method:'GET',
          timeout: 10000,
          url: 'https://0ikanmdrx1.execute-api.eu-west-1.amazonaws.com/production/getcategories',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        });
      }
    }
  });

angular.module('cocoowa')
  .factory("Categories",function CategoriesFactory($http){
    return{
      getAll: function(){
        return $http({
          method:'GET',
          timeout: 10000,
          url: 'https://api.deliverymanager.gr/cocoowa/getcategories',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        });
      }
    }
  });

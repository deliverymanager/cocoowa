angular.module('cocoowa')
  .factory("Products",function ProductsFactory($http){
    return{
      getAll: function(){
        return $http({
          method:'GET',
          timeout: 10000,
          url: 'https://api.deliverymanager.gr/cocoowa/getcocoowartproducts',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        });
      }
    }
  });

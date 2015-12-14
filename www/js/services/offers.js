angular.module('cocoowa')
  .factory("Offers",function OffersFactory($http){
    return{
      getLatest: function(){
        return $http({
          method:'GET',
          timeout: 10000,
          url: 'https://0ikanmdrx1.execute-api.eu-west-1.amazonaws.com/production/getoffers',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        });
      }
    }
  });

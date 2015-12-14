angular.module('cocoowa')
  .factory("Offers",function NewsletterFactory($http){
    return{
      getLatest: function(data){
        console.log("Parameters for getting latest offers POST",data);
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

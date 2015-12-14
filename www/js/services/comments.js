angular.module('cocoowa')
  .factory("Comments",function CommentsFactory($http){
    return{

      send: function(data){
        console.log("Parameters for sending a comment POST",data);

        return $http({

          method:'POST',
          timeout: 10000,
          url: 'https://0ikanmdrx1.execute-api.eu-west-1.amazonaws.com/production/sendcomment',
          data: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        });
      }
    }
  });

   
    // Code goes here
    
    var app = angular.module('myApp', []);
    app.controller('customersCrtl', function($scope, $http) {
    
    
    //    $http({
    //     method: 'GET',
    //     url: 'https://getpwa.github.io/informatics/testdata.json'
    //   }).then(function(data) {
       
    //     $scope.sources = data.sources; // response data
    //   });
    
    // });

      
      $http({
          method: "GET",
          url: 'https://getpwa.github.io/informatics/testdata.json', // link UserLogin with HomeController 
          data: $scope.user
       }).then(function (response) {
       
        if(response.status === 200) {
          $scope.sources = response.data.sources; // response data
      }


      }, function (error) {

        console.log(error);
      });
    });
    
        
        
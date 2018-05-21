   
    // Code goes here
    
    var app = angular.module('myApp', []);
    app.controller('customersCrtl', function($scope, $http) {
    
    
       $http({
        method: 'GET',
        url: 'https://getpwa.github.io/informatics/testdata.json'
      }).then(function(data) {
       
        $scope.sources = data.sources; // response data
      });
    
    });
    
    
    
        
        
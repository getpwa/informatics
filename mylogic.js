window.onload=function(){

    
    // Code goes here
    
    var app = angular.module('myApp', []);
    app.controller('customersCrtl', function($scope, $http) {
    
    
       $http({
        method: 'GET',
        url: 'https://getpwa.github.io/informatics/testdata.json'
      }).success(function(data) {
       
        $scope.sources = data.sources; // response data
      });
    
    });
    
    
        
    
        
        }
        
        
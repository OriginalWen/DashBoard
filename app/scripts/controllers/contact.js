'use strict';
// CONTACT CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Contact" section for the form
app.controller('contact',function($scope,$http){
    $scope.date=new Date();	
    $http({
            
            method:"GET",
            url:"/api/location"
        
            }).then(function mySuccess(response){
            
            
             $scope.locations=response.data.locations;
            
            
        }, function myError(response){
        
        console.log("error");
    });
    $http({
            
            method:"GET",
            url:"/api/category"
        
            }).then(function mySuccess(response){
            
            
             $scope.categories=response.data.categories;
            
            
        }, function myError(response){
        
        console.log("error");
    });

  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];


});
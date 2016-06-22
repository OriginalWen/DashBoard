'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them

//var app = angular.module("myApp",[]);  
    app.controller('work', function($scope,$http) {
        
      $scope.userName="aaa";
        
        $http({
            
            method:"GET",
            url:"/api/work"
        
            }).then(function mySuccess(response){
            
            
             $scope.works=response.data.works;
            
            
        }, function myError(response){
        
        console.log("error");
    });
    
        
        
        $scope.deleteItem = function(item) {
        
            var items = $scope.works;
            var length = items.length;
            $scope.removeIndex = -1;
               // alert(item);
            for (var i = 0; i < length; i++) {
                if (angular.equals(items[i], item)) {
                    $scope.removeIndex = i;
                  //  alert($scope.removeIndex);
                    break;
                }
               
            }
        
        };
        
        $scope.deleteConfirm = function() {
            //alert("hahaha");
            $scope.works.splice($scope.removeIndex, 1);
           // alert("hahaha");
        };
        
        
        $scope.addItems=function(){
            alert($scope.addtitle);
            var newItem={
                
                title: $scope.addtitle,
                author:$scope.addAuthor,
                like:$scope.addLike,
                comment:$scope.addComment,
                image: ''
                
                  
            }
           // alert($scope.addTitle);
            $scope.works.push(newItem);
        }
        
        /* $scope.editItems=function(item){
             $scope.theEdit=item;
             
             
         }*/
   
    });
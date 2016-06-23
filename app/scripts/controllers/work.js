'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them
//var app = angular.module("myApp",[]);  
    app.controller('work', function($scope,$http, $filter) {
        
     // $scope.userName="aaa";
        
        $http({
            
            method:"GET",
            url:"/api/work"
        
            }).then(function mySuccess(response){
            
            
             $scope.works=response.data.works;
            
            
        }, function myError(response){
        
        console.log("error");
    });
    

           
        /*  $scope.greaterThan = function(prop, val){
            
            
            return function(item){
                
            return item[prop] > val;
            }
            }
        */
        $scope.deleteItem = function(item) {
        
          //  var items = $scope.works;
          //  var length = items.length;
            $scope.removeIndex = -1;
            $scope.removeIndex=$scope.works.indexOf(item);
               // alert(item);
         /*   for (var i = 0; i < length; i++) {
                if (angular.equals(items[i], item)) {
                    $scope.removeIndex = i;
                  //  alert($scope.removeIndex);
                    break;
                }
               
            }*/
        
        };
        
        $scope.deleteConfirm = function() {
            //alert("hahaha");
            $scope.works.splice($scope.removeIndex, 1);
           // alert("hahaha");
        };
        
        
        $scope.addItems=function(){
           // alert($scope.addtitle);
            var newItem={
                
                title: $scope.addtitle,
                author:$scope.addAuthor,
                like:$scope.addLike,
                comment:$scope.addComment,
                image: ''
                
                  
            }
           // alert($scope.addTitle);
            $scope.works.push(newItem);
            $scope.addtitle="";
            $scope.addAuthor="";
            $scope.addLike="";
            $scope.addComment="";
            
            
        }
        
         $scope.editItems=function(item){
             $scope.editIndex = -1;
            $scope.editIndex=$scope.works.indexOf(item);
             $scope.edittitle=item.title;
            $scope.editAuthor=item.author;
            $scope.editLike=item.like;
            $scope.editComment=item.comment;
             
         }
         
         $scope.editConfirm = function() {
             var i=$scope.editIndex;
            $scope.works[i].author=$scope.editAuthor;
            $scope.works[i].title=$scope.edittitle;
             $scope.works[i].like=$scope.editLike;
             $scope.works[i].comment=$scope.editComment;
            
        };
      /*  $scope.greaterThan = function(input) {
        return function(item) {                          
            if ( parseInt(item['like'].substring(0,item['like'].length-7)) > parseInt(input)) {                
                return true;
            } else {                
                return false;
            }
        }
        };*/
        
        $scope.order = function(expression, reverse) {
            $scope.works = $filter('orderBy')($scope.works, expression, reverse);
        }

        
    });


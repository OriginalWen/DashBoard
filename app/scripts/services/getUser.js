'use strict';
// GETUSER SERVICE
// Description: Define the getUserService that has 1 functionality: 
// making service calls to retrieve the logged-in users' information


var app = angular.module('myApp');

app.factory('getUser',function($resource,session){
	var user = session.get('user');
	return $resource('/api/getuser',{},{
         getUser: {
         	method:'GET',
         	params:{
         		user: user
         	}
         }
	});

	// var entry = $resource('/api/getuser',{}, {
                
 //              });
 //              entry.query({user:user},function(response){
 //                 $scope.username=response.data.name;
 //              }, function() {
 //                console.log("SORRY");
 //            });
});
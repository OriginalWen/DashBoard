'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user
app.controller('login', function($scope, $state, authenticate, session) {

    

    $scope.submitForm = function() {
        session.set("user", $scope.userName);
        session.set("psw", $scope.password);
        
    
        if (authenticate.getUser() == "success") {
           
            $state.go("root.work");
            // $window.location.reload("root.overview");

        } else {
            // Not log the user in
           // $scope.reminder = !$scope.reminder;
            console.log("error");
        }
    }

});
    
  


    
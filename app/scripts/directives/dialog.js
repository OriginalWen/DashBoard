'use strict';
// DIALOG DIRECTIVE
// Description: Define 2 directives in the app: addDialog and editDialog. 
// First one is for the "Add" button and the second one is for the "Edit" button
angular.module('myApp', [])
    .directive('myDirective', function() {
        return {
                restrict: 'E',
                template: '<a href="http://google.com">
                    Click me to go to Google</a>'
                }
                });
  /*  .directive("addDialog", function(){
    return{
        
        restrict:'E',
      //  templateUrl: 'templates/addDialog.html'
        
        template:"aaaaaa",
        
        
    };
})
    .directive("editDialog", function(){
    return{
        
        restrict:"A",
        templateUrl:'templates/editDialog.html'
        
        
        
    };
        
    
    
});*/

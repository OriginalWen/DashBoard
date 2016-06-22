'use strict';
/**
 * @ngdoc app
 * @name dashboard
 * @description
 * # dashboard
 *
 * Main module of the application. Define the routing architecture for the app
 */


 /*



Use the $location service in a controller:

var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
});




 */




var app = angular.module('myApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');
$stateProvider

        .state('root', {
            url: '/root',
            templateUrl: 'templates/root.html',
            //controller: 'root'
        
        })

        .state('root.work', {
            url: '/work',
            templateUrl: 'templates/work.html',
            controller: 'work'
        
        })
        .state('root.overview', {
            url: '/overview',
            templateUrl: 'templates/overview.html'
            
        
        })
    
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'login'
        
        })
        .state('root.work.confirmBox', {
          
            templateUrl: 'templates/confirmBox.html'
        })
        .state('root.work.addDialog', {
          
            templateUrl: 'templates/addDialog.html'
        })
        .state('root.work.editDialog', {
          
            templateUrl: 'templates/editDialog.html'
        })

 // alert(a);

    
    
    
});
app.run(function($rootScope) {
$rootScope.edit = false;
});

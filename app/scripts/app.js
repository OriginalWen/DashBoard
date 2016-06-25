'use strict';
/**
 * @ngdoc app
 * @name dashboard
 * @description
 * # dashboard
 *
 * Main module of the application. Define the routing architecture for the app
 */



var app = angular.module('myApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');
$stateProvider

        .state('root', {
            url: '/root',
            templateUrl: 'templates/root.html',
            controller: 'root'
        
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
          
            templateUrl: 'templates/addDialog.html',
            controller: 'work'
        })
        .state('root.work.editDialog', {
          
            templateUrl: 'templates/editDialog.html'
        })

 // alert(a);

    
    
    
        });


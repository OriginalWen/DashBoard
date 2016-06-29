'use strict';
/**
 * @ngdoc app
 * @name dashboard
 * @description
 * # dashboard
 *
 * Main module of the application. Define the routing architecture for the app
 */



var app = angular.module('myApp',['ui.router', 'ui.bootstrap']);

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
        .state('root.contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html',
            controller:'contact'
        
        })
    
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'login'
        
        })
        .state('root.work.confirmBox', {
          
            templateUrl: 'templates/confirmBox.html'
        })
    
 // alert(a);

    
    
    
        });


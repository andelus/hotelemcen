//Main App module
var hotelemcen = angular.module('hotelemcen',['ngRoute','ngAnimate','controllers','services']);
//Here will go our routes
hotelemcen.config(function($routeProvider){
    //Home route
    $routeProvider
    .when('/',
        {
          templateUrl:'views/home.html',
          controller:'getHotels'
        }
      )
    .when('/hotels/:hotelId',
        {
          templateUrl:'views/hotel.html',
          controller:'showHotel'
        }
      )
      .otherwise({
          redirectTo:'/'
      });

});

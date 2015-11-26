var hotelSrvc = angular.module('services',[]);
//Here will go all our services
hotelSrvc.factory('hotelList',function($http){
  var hotels = [];
  return {
    get : function(){
      $http.get('hotels.json').success(function(data){
        for (var i = 0; i < data.length; i++) {
          hotels.push(data[i]);
        }
      });
      return hotels;
    }
  }
});

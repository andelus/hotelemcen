var hotelSrvc = angular.module('services',[]);
//Here will go all our services
hotelSrvc.factory('hotelList',function($http){
  var hotels = [];
  var hotel = {};
  return {
    get : function(){
      $http.get('hotels.json').success(function(data){
        for (var i = 0; i < data.length; i++) {
          hotels.push(data[i]);
        }
      });
      return hotels;
    },
    getById : function(hotelId){
      $http.get('hotels.json').success(function(data){
        for (var i = 0; i < data.length; i++) {
          if(data[i].id == hotelId)
          {
            Object.assign(hotel,data[i]);
          }
        }
        console.log(hotel);
      });
      return hotel;
    }
  }
});

//Reviews list
hotelSrvc.factory('reviewList',function($http){
    var reviews = {
        comments : []
    };
    return{
      get : function(hotelId){
        $http.get('reviews.json').success(function(data){
          for (var i = 0; i < data.length; i++) {

            for(var j=0;j<data[i].reviews.length;j++){
              if(data[i].reviews[j].hotelId == hotelId){
                reviews.comments.push(data[i].reviews[j])
              }
            }
          }
          console.log(reviews);
        });
        return reviews;
      }
    }
});

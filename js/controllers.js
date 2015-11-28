var hotelCtrl = angular.module('controllers',[]);
//Here will go all out controllers
hotelCtrl.controller('getHotels',function($scope,hotelList){
  $scope.hotels = hotelList.get();
});

//Hotel page controller
hotelCtrl.controller('showHotel',
function($scope,$routeParams,hotelList,reviewList){

  $scope.hotel = hotelList.getById($routeParams.hotelId);
  $scope.reviews = reviewList.get($routeParams.hotelId);
  
});

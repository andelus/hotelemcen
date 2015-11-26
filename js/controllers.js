var hotelCtrl = angular.module('controllers',[]);
//Here will go all out controllers
hotelCtrl.controller('getHotels',function($scope,hotelList){
  $scope.hotels = hotelList.get();
});

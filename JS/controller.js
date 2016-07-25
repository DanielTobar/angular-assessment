angular.module('assessment').controller('mainCtrl',function($scope, service)
{
  $scope.getProducts = function() {
    service.getProducts().then(function(info) {
      $scope.products = products.info;
    });
  };

  $scope.getUsers();

});

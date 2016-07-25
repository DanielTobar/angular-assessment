angular.module('assessment').service('service','$http',function() {

  this.getProducts = function() {
    return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/products'
    });
  };
});

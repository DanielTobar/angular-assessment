angular.module('assessment', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../views/home.html'
      })
      .state('about',{
        url:'/about',
        templateUrl:'../views/about.html'
      })
      .state('blog', {
        url:'/blog',
        templateUrl:'../views/blog.html'
      })
      .state('shop', {
        url:'/shop',
        templateUrl:'../views/shop.html'
      });
  }).directive('data', function(){
  return{
    scope:[],
    template:'<a class="product-grid__product" ><img class="product-grid__img"sizes="(min-width: 960px) 33vw, (min-width: 769px) 50vw, 100vw" alt=""></a><a class="product-grid__product" ng-repeat="image in products">show image</a><div class="product-grid__meta"><h3 class="product-grid__name" "ng-repeat=title in products"><a></a></h3><h4 class="product-grid__sub" ng-repeat="desc in products"></h4><div class="product-grid__price" ng-repeat="price in products"></div></div>'

  };
 }
);

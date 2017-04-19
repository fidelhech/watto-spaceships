var app = angular.module( "wattoApp", [ 'ngRoute' ] );

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);

    $routeProvider
    .when("/", {
        templateUrl : "views/listings.html",
        controller  : "mainCtrl"
    })
    .when("/spaceship/:num", {
        templateUrl : "views/single.html",
        controller  : "singleCtrl"
    })
    .otherwise({
        redirectTo: "/"
    });

}]);

app.controller( "mainCtrl", [ '$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

    if($rootScope.spaceships === undefined) {
        $http.get("//demo7475333.mockable.io/spaceships")
        .then(function(response) {
            $rootScope.spaceships =  response.data.products;
        });

        // $http.get("mock/api.json")
        // .then(function(response) {
        //     $rootScope.spaceships =  response.data.products;
        // });
    }

}] );

app.controller( "singleCtrl", [ '$scope', '$routeParams', '$rootScope', function($scope, $routeParams, $rootScope) {

  $scope.spaceship = $rootScope.spaceships[$routeParams.num];
  $scope.spaceship.imageNum = $routeParams.num;

}] );

//# sourceMappingURL=maps/app.js.map

var app = angular.module('cms', ['ngAnimate']);

app.controller('Comments', ['$scope', function($scope) {
    $scope.items = [];
    $scope.addItem = function() {
        $scope.items.push($scope.item);
        $scope.item = {};
    };
}]);

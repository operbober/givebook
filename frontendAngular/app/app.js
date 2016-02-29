/**
 * Created by admin on 29.02.2016.
 */

'use strict';

var app = angular.module('giveBook', []);

function UserController($scope, $http) {

  $scope.users = [];

  $scope.loadUsers = function() {
    var httpRequest = $http.get('http://localhost:8081/users').success(function(data, status) {
      $scope.users = data;
    });

  };

}
(function (app) {

  'use strict';

  var MainController = function ($scope) {

    //for menu dropdown to work properly run after page is rendered
    $scope.$on('$viewContentLoaded', function () {
      $('#nav > ul').dropotron({
        mode: 'fade',
        noOpenerFade: true,
        hoverDelay: 150,
        hideDelay: 350,
        easing: 'swing'
      });
    });
  };

  app.controller("MainController", ["$scope", MainController]);

}(angular.module("cookingBlog")));
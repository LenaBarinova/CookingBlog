(function (app) {

  'use strict';

  var link = function (scope, element) {
    $('#nav > ul').dropotron({
      mode: 'fade',
      noOpenerFade: true,
      hoverDelay: 150,
      hideDelay: 350
    });
  };

  var jbController = function ($scope, $location) {
    $scope.showRecipes = function () {
      $location.url('/recipes');
    };
    $scope.showAbout = function () {
      $location.url('/about');
    };
  };

  var jbNav = function () {
    return {
      templateUrl: "././partials/jbNav.html",
      restrict: "E",
      link: link,
      controller: jbController
    };
  };

  app.directive("jbNav", jbNav);

}(angular.module("cookingBlog")));
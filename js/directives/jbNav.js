(function (app) {

  'use strict';

  var jbNav = function ($location) {
    return {
      templateUrl: "././partials/jbNav.html",
      restrict: "E",
      link: function (scope, element) {
        $('#nav > ul').dropotron({
          mode: 'fade',
          noOpenerFade: true,
          hoverDelay: 150,
          hideDelay: 350
        });
        scope.showRecipes = function () {
          $location.url('/recipes');
        };
        scope.showAbout = function () {
          $location.url('/about');
        };
      }
    };
  };

  app.directive("jbNav", ["$location", jbNav]);

}(angular.module("cookingBlog")));
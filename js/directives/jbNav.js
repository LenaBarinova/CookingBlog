(function (app) {

  'use strict';

  var jbNav = function () {
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
      }
    };
  };

  app.directive("jbNav", jbNav);

}(angular.module("cookingBlog")));
(function(){

  angular.module("cookingBlog").directive('jbFooter', function() {
    return {
      templateUrl: "./partials/jbFooter.html",
      restrict: "E"
    };
  });
}());
(function(){

  angular.module("cookingBlog").directive('jbNav', function() {
    return {
      templateUrl: "././partials/jbNav.html",
      restrict: "E",
      link: function () {
                $('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				hoverDelay: 150,
				hideDelay: 350
			});
            }
    };
  });
}());
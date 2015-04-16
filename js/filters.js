(function(){

  angular.module("cookingBlog").filter('amount', function() {
    return function(amount){
      switch(amount) {
        case 0.25:
          return "1/4";  
        case 0.3:
          return "1/3";
        case 0.5:
          return "1/2";
        case 0.6:
            return "2/3";
        case 0.75:
          return "3/4";
        default:
          return amount;  
      }
    };
  });
}());
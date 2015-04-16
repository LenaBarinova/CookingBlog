(function(){

  angular.module("cookingBlog").filter('amount', function() {
    return function(amount){
      var floor = Math.floor(amount);
      var prefix = floor > 0 ? floor + " & " : "";
      switch(amount - floor) {
        case 0.25:
          return prefix + "1/4";  
        case 0.3:
          return prefix + "1/3";
        case 0.5:
          return prefix + "1/2";
        case 0.6:
            return prefix + "2/3";
        case 0.75:
          return prefix + "3/4";
        default:
          return amount;  
      }
    };
  });
}());
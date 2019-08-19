angular.module("ListaTelefonica").directive("date", function(){
  return {
    link: function(scope, element, attrs){
      console.log(attrs);
    }
  }
})

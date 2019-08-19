angular.module("ListaTelefonica").directive("errorDiv", function(){
  return {
    templateUrl: "view/error.html",
    replace: true,
    retrict: "AE",
    scope: {
      title: "@",//@title se parametro for diferente e @ se for igual
    },
    transclude: true
  };
});

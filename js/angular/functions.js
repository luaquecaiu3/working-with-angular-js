//angular functions
angular.module("helloWorld", []);
angular.module("helloWorld").controller("helloWorldCtrl", function($scope){
  $scope.message = "Hello Motherfuckers World!";
});

angular.module("ListaTelefonica", []);
angular.module("ListaTelefonica").controller("ListaTelefonicaCtrl", function($scope){
  $scope.app = "Lista Telefonica";
});

//angular functions
angular.module("helloWorld", []);
angular.module("helloWorld").controller("helloWorldCtrl", function($scope){
  $scope.message = "Hello Motherfuckers World!";
});

angular.module("ListaTelefonica", []);
angular.module("ListaTelefonica").controller("ListaTelefonicaCtrl", function($scope){
  $scope.app = "Lista Telefonica";
  $scope.contatos = [
    {
      nome: "Lua",
      telefone: "1293456-7890"
    },
      {
        nome: "Patrick",
        telefone: "1293456-7890"
      },
        {
          nome: "Ana",
          telefone: "1293456-7890"
        }
  ]
});

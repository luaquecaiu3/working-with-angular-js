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
  ];

  $scope.operadoras = [
    {      nome: "oi", codigo: 1    },
      {      nome: "vivo", codigo: 2    },
        {      nome: "claro", codigo: 3   },
          {      nome: "tim", codigo: 4    },
  ]

  $scope.adicionarContato = function(contato){
    $scope.contatos.push(angular.copy(contato));
    delete $scope.contato;
  };
});

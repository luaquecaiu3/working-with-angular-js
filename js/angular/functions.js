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
      telefone: "1293456-7890",
      cor: "blue"
    },
    {
      nome: "Patrick",
      telefone: "1293456-7890",
      cor: "red"
    },
    {
      nome: "Ana",
      telefone: "1293456-7890",
      cor: "yellow"
    }
  ];

  $scope.operadoras = [
    {      nome: "oi", codigo: 1, categoria: 'celular'    },
    {      nome: "vivo", codigo: 2    , categoria: 'celular'},
    {      nome: "claro", codigo: 3   , categoria: 'celular'},
    {      nome: "tim", codigo: 4    , categoria: 'fixo'},
    {      nome: "gvt", codigo: 5    , categoria: 'fixo'},
    {      nome: "embratel", codigo:6    , categoria: 'fixo'}
  ];

  $scope.classe1 = "selecionado";
  $scope.classe2 = "negrito";

  $scope.adicionarContato = function(contato){
    $scope.contatos.push(angular.copy(contato));
    delete $scope.contato;
    $scope.contatoForm.$setPristine();
  };

  $scope.apagarContato = function(contatos){
    $scope.contatos = contatos.filter(function(contato){
      if(!contato.selecionado){
        return contato;
      }
    });
  };

  $scope.isContatoSelecionado = function(contatos){
    return contatos.some(function (contato){
      return contato.selecionado;
    });
  };



});

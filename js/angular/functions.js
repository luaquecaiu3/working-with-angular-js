//angular functions
angular.module("helloWorld", []);
angular.module("helloWorld").controller("helloWorldCtrl", function($scope){
  $scope.message = "Hello Motherfuckers World!";
});

angular.module("ListaTelefonica", ["ngMessages"]);
angular.module("ListaTelefonica").controller("ListaTelefonicaCtrl", function($scope, uppercaseFilter){
  $scope.app = "Lista Telefonica";

  $scope.contatos = [
    {
      nome: uppercaseFilter("Lua"),
      telefone: "1293456-7890",
      data: new Date(),
      operadora: {nome: "claro", codigo: 3   , categoria: 'celular'},
      cor: "blue"
    },
    {
      nome: "Patrick",
      telefone: "1293456-7890",
      data: new Date(),
      operadora: {nome: "tim", codigo: 4    , categoria: 'fixo'},
      cor: "red"
    },
    {
      nome: "Ana",
      telefone: "1293456-7890",
      data: new Date(),
      operadora: {nome: "oi", codigo: 1, categoria: 'celular'},
      cor: "yellow"
    },
    {
      nome: "Elo",
      telefone: "1293456-7890",
      data: new Date(),
      operadora: {nome: "tim", codigo: 4, categoria: 'fixo'},
      cor: "pink"
    }
  ];

  $scope.operadoras = [
    {      nome: "oi", codigo: 1, categoria: 'celular', preco: 1},
    {      nome: "vivo", codigo: 2    , categoria: 'celular', preco: 2},
    {      nome: "claro", codigo: 3   , categoria: 'celular', preco: 2},
    {      nome: "tim", codigo: 4    , categoria: 'fixo', preco: 5},
    {      nome: "gvt", codigo: 5    , categoria: 'fixo', preco: 3},
    {      nome: "embratel", codigo:6    , categoria: 'fixo', preco: 1}
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

  $scope.ordenarPor = function(campo){
    $scope.criterioOrdem = campo;
  /*  if($scope.direcaoOrdem == undefined){
      $scope.direcaoOrdem = true;
      $scope.direcaoOrdem = !$scope.direcaoOrdem;
    }
    else{*/
    $scope.direcaoOrdem = !$scope.direcaoOrdem;
  //}
  };


});

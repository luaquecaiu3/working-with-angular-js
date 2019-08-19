angular.module("ListaTelefonica").controller("ListaTelefonicaCtrl", function($scope, $http, contatosAPI, operadorasAPI,serialGenerator){
  $scope.app = "Lista Telefonica";
  $scope.error = "";

  $scope.data = new Date();

  $scope.header = "HEADER";
  $scope.footer = "FOOTER";

  $scope.contatos = [];

  $scope.operadoras = [];

  $scope.cores = [];

  function errorCallback(error){
    $scope.error = "Algo deu errado!";
  };

  var carregarHeader = function () {

    function successCallback(response){
      $scope.header = response.data;
    };

    $http.get("http://localhost:3412/header").then(successCallback, errorCallback);
  };

  var carregarFooter = function () {

    function successCallback(response){
      $scope.footer = response.data;
    };

    $http.get("http://localhost:3412/footer").then(successCallback, errorCallback);
  };

  var carregarContatos = function () {

    function successCallback(response){
      $scope.contatos = response.data;
    };

    contatosAPI.getContatos().then(successCallback, errorCallback);
  };

  var carregarOperadoras = function () {

    function successCallback(response){
      $scope.operadoras = response.data;
    };

    operadorasAPI.getOperadoras().then(successCallback, errorCallback);
  };

  var carregarCores = function () {

    function successCallback(response){
      $scope.cores = response.data;
    };

    $http.get("http://localhost:3412/cores").then(successCallback, errorCallback);
  };

  $scope.classe1 = "selecionado";
  $scope.classe2 = "negrito";

  $scope.adicionarContato = function(contato){
    contato.serial = serialGenerator.generate();
    contato.data = new Date();

    function successCallback(response){
      console.log(response);
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
    };

    contatosAPI.saveContato(contato).then(successCallback, errorCallback);
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
    $scope.direcaoOrdem = !$scope.direcaoOrdem;
  };

  carregarHeader();
  carregarFooter();
    carregarContatos();
    carregarOperadoras();
    carregarCores();

});

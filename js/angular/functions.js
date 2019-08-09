//angular functions
angular.module("helloWorld", []);
angular.module("helloWorld").controller("helloWorldCtrl", function($scope){
  $scope.message = "Hello Motherfuckers World!";
});

angular.module("ListaTelefonica", ["ngMessages"]);
angular.module("ListaTelefonica").controller("ListaTelefonicaCtrl", function($scope, $http){
  $scope.app = "Lista Telefonica";

  $scope.data = new Date();

  $scope.contatos = [];

  $scope.operadoras = [];

  $scope.cores = [];

  function errorCallback(error){
    $scope.app = "Error: " + error.status + " " + error.statusText;
  };

  var carregarContatos = function () {

    function successCallback(response){
      $scope.contatos = response.data;
    };

    $http.get("http://localhost:3412/contatos").then(successCallback, errorCallback);
  };

  var carregarOperadoras = function () {

    function successCallback(response){
      $scope.operadoras = response.data;
    };

    $http.get("http://localhost:3412/operadoras").then(successCallback, errorCallback);
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
    contato.data = new Date();

    function successCallback(response){
      console.log(response);
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
    };

    $http.post('http://localhost:3412/contatos', contato).then(successCallback, errorCallback);
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

    carregarContatos();
    carregarOperadoras();
    carregarCores();

});

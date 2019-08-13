var app = angular.module("myApp", []);

app.controller("mainController", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});



/* angular.module("HTMLIncludes").controller("includesCtrl", function($scope, $http){

  $scope.app = "includes";

  $scope.header = "";
  $scope.footer = "";

  function errorCallback(error){
    $scope.app = error;
  };

  var carregarHeader = function () {

    function successCallback(response){
      $scope.header = response;
    };

    $http.get("view/header.html").then(successCallback, errorCallback);
  };

  var carregarFooter = function () {

    function successCallback(response){
      $scope.footer = response;
    };

    $http.get("view/footer.html").then(successCallback, errorCallback);
  };

//  carregarHeader();
  //carregarFooter();
});
*/

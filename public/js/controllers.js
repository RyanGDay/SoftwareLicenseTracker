var controllers = angular.module('licenseControllers', []);

controllers.controller('indexController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

  $scope.tempLicense = {id:null, company:"", product:"", key:""};
  $scope.editIndex = -1;

  const dbRef = firebase.database().ref().child('licenses');

  var licenseList= $firebaseArray(dbRef);
  $scope.licenses = licenseList;

  $scope.addLicense = function(clickEvent) {
    licenseList.$add($scope.tempLicense);
    resetTempLicense();
  };

  $scope.deleteLicense = function(delPosition) {
    licenseList.$remove(delPosition);
  };

  $scope.editLicense = function(editPosition) {
    console.log(editPosition);
    var dbKey = licenseList.$keyAt(editPosition);
    $scope.tempLicense = licenseList.$getRecord(dbKey);
    console.log($scope.tempLicense);
  };

  $scope.saveLicense = function(clickEvent) {
    licenseList[editIndex] = $scope.tempLicense;
    licenseList.$save(editIndex);
    $scope.editIndex = -1;
    resetTempLicense();
  };

  function resetTempLicense() {
    $scope.tempLicense = {id:null, company:"", product:"", key:""};
  };

}]);

(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$http'];

  function mainController($scope, $http) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
    this.dispense = function() {
      console.log("dispensing in 3 seconds");
      $http.get('http://elsiefeeder.localtunnel.me')
      // .then(data1, error);
    }
  }

})();

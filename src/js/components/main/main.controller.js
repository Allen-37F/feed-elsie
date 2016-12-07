(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$http'];

  function mainController($scope, $http) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';

    this.callDog = function() {
      console.log("Calling the doglet");
      $http.get('http://elsiefeeder.localtunnel.me/call')
      // .then(data1, error);
    }

    this.dispense = function() {
      console.log("Dispensing in 3 seconds");
      $http.get('http://elsiefeeder.localtunnel.me/spin')
      // .then(data1, error);
    }
  }

})();
